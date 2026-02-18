import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

// メール通知先
const NOTIFY_EMAILS = ['yukiko@starkwell.jp', 'michael@starkwell.jp'];

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

async function sendNotificationEmails(data: ContactData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set. Skipping email notification.');
    return;
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Starkwell <onboarding@resend.dev>';
  const subject = `[Starkwell] お問い合わせ: ${data.subject}`;
  const html = `
    <h2>新しいお問い合わせがありました</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 120px;">お名前</td><td style="padding: 8px; border: 1px solid #ddd;">${data.lastName} ${data.firstName}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">メールアドレス</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">件名</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(data.subject)}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">メッセージ</td><td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(data.message)}</td></tr>
    </table>
    <p style="margin-top: 16px; color: #666; font-size: 12px;">このメールは Starkwell のお問い合わせフォームから自動送信されました。</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: NOTIFY_EMAILS,
      subject,
      html,
      reply_to: data.email,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${response.status} ${error}`);
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body as ContactData;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: '必須項目が入力されていません。',
    });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({
      success: false,
      message: 'サーバー設定エラーです。',
    });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // 1. Supabase に保存
    const { error: dbError } = await supabase.from('contacts').insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        subject,
        message,
      },
    ]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      return res.status(500).json({
        success: false,
        message: '送信に失敗しました。しばらくしてから再度お試しください。',
      });
    }

    // 2. メール通知を送信（失敗してもDB保存は成功とする）
    try {
      await sendNotificationEmails({
        firstName,
        lastName,
        email,
        subject,
        message,
      });
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // メール送信失敗はログのみ。ユーザーには成功を返す
    }

    return res.status(200).json({
      success: true,
      message: '送信が完了しました。',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      success: false,
      message: '送信に失敗しました。しばらくしてから再度お試しください。',
    });
  }
}
