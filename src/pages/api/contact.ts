import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const DEFAULT_NOTIFY_EMAILS = ['info@starkwell.jp', 'yukiko@starkwell.jp', 'michael@starkwell.jp'];

function getNotifyEmails(): string[] {
  const custom = process.env.RESEND_TO_EMAIL?.trim();
  if (custom) {
    return custom.split(',').map((e) => e.trim()).filter(Boolean);
  }
  return DEFAULT_NOTIFY_EMAILS;
}

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

async function sendNotificationEmails(data: ContactData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmails = getNotifyEmails();
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');
  if (toEmails.length === 0) throw new Error('No recipient emails configured');

  // 本番は starkwell.jp から送信。ドメイン未検証時のみ CONTACT_FROM_EMAIL=Starkwell <onboarding@resend.dev> を設定
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() || 'Starkwell <info@starkwell.jp>';
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
      to: getNotifyEmails(),
      subject,
      html,
      reply_to: data.email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[Resend]', response.status, errorText);
    throw new Error(`Resend: ${response.status} ${errorText}`);
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

  const body = req.body ?? {};
  const { firstName, lastName, email, subject, message } = body as ContactData;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: '必須項目が入力されていません。',
    });
  }

  const contactData = { firstName, lastName, email, subject, message };

  try {
    // 1. メール通知を優先（Resend が設定されていればこちらで成功とする）
    const hasResendKey = !!process.env.RESEND_API_KEY?.trim();
    if (hasResendKey) {
      await sendNotificationEmails(contactData);
      // メール送信成功 → Supabase はオプション（失敗しても成功を返す）
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
        const supabaseKey = (
          process.env.SUPABASE_SERVICE_ROLE_KEY ||
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )?.trim();
        if (supabaseUrl && supabaseKey) {
          const supabase = createClient(supabaseUrl, supabaseKey);
          const { error } = await supabase.from('contacts').insert([
            { first_name: firstName, last_name: lastName, email, subject, message },
          ]);
          if (error) throw error;
        }
      } catch (dbError) {
        console.warn('Supabase save skipped (email sent):', dbError);
      }
      return res.status(200).json({
        success: true,
        message: '送信が完了しました。',
      });
    }

    // 2. Resend がなければ Supabase のみ
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const supabaseKey = (
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )?.trim();

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({
        success: false,
        message: 'RESEND_API_KEY または Supabase の設定が必要です。',
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
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
