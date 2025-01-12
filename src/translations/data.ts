import { Translations } from './index';

export const translations: Record<'en' | 'ja', Translations> = {
  en: {
    hero: {
      title: 'AI-driven Healthcare Cost Transparency',
      subtitle: 'Compare Costs and Make the Best Choice',
      description1: 'Compare hospital, insurance, and specialist fees at a glance.',
      description2: 'Make smarter healthcare decisions with transparent pricing data.',
      description3: 'An AI-powered platform for comparing healthcare costs.',
      cta: 'Contact'
    },
    contact: {
      title: 'Contact Us',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you for your message. We will get back to you soon.',
      errorMessage: 'Sorry, there was an error sending your message. Please try again.'
    },
    services: {
      title: 'Our Services',
      providers: {
        title: 'For Healthcare Providers',
        description: 'Build competitive advantage with price transparency...'
      },
      payers: {
        title: 'For Payers',
        description: 'Stay ahead of regulations and requirements...'
      },
      employers: {
        title: 'For Employers',
        description: 'Empower smarter healthcare plan choices...'
      },
      lifeSciences: {
        title: 'For Life Sciences',
        description: 'Transform commercial strategy with data...'
      }
    },
    features: {
      searchCare: {
        title: 'Search for Care',
        point1: 'Search for the care you need.',
        point2: 'Add your insurance plan.',
        point3: 'Find nearby healthcare providers.'
      },
      compare: {
        title: 'Compare Important Points',
        point1: 'Check and compare prices.',
        point2: 'Set location and quality preferences.',
        point3: 'Understand the breakdown of costs.'
      },
      estimate: {
        title: 'Estimate Costs',
        point1: 'Add insurance benefit information.',
        point2: 'Estimate out-of-pocket costs.',
        point3: 'Contact providers to confirm.'
      }
    },
    readyToStart: {
      title: 'Ready to Get Started?',
      button: 'Contact Us'
    },
    comingSoon: {
      title: 'Homepage Coming Soon',
      description: 'We\'re working hard to bring you an even better experience. Stay tuned for our full website launch.'
    }
  },
  ja: {
    hero: {
      title: 'AI駆動の医療費用透明化',
      subtitle: '費用を比較して最適な選択を',
      description1: '病院、保険、専門医の料金を一目で比較。',
      description2: '透明性のある価格データでスマートな医療決定を。',
      description3: 'AIを活用した医療費用比較プラットフォーム。',
      cta: 'お問い合わせ'
    },
    contact: {
      title: 'お問い合わせ',
      firstName: '名',
      lastName: '姓',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      send: '送信',
      sending: '送信中...',
      successMessage: 'お問い合わせありがとうございます。内容を確認の上、ご連絡させていただきます。',
      errorMessage: '申し訳ありません。送信中にエラーが発生しました。もう一度お試しください。'
    },
    services: {
      title: 'サービス',
      providers: {
        title: '医療提供者向け',
        description: '人員を増やしたり事業範囲を広げすぎることなく...'
      },
      payers: {
        title: '支払者向け',
        description: '法規制や要件を先取りしつつ...'
      },
      employers: {
        title: '雇用者向け',
        description: '透明性のある製品を活用して...'
      },
      lifeSciences: {
        title: 'ライフサイエンス向け',
        description: '最も多忙なCEOから...'
      }
    },
    features: {
      searchCare: {
        title: 'ケアを探す',
        point1: '必要なケアを検索',
        point2: '保険プランを追加',
        point3: '近くの医療提供者を検索'
      },
      compare: {
        title: '重要な点を比較',
        point1: '料金を確認して比較',
        point2: '場所と品質の設定',
        point3: '料金の内訳を把握'
      },
      estimate: {
        title: '費用を見積もり',
        point1: '保険の給付情報を追加',
        point2: '自己負担額を見積もり',
        point3: '提供者に連絡して確認'
      }
    },
    readyToStart: {
      title: '始めましょう',
      button: 'お問い合わせ'
    },
    comingSoon: {
      title: 'ホームページ準備中',
      description: 'より良いサービスを提供するため準備中です。完全版の公開をお待ちください。'
    }
  }
}; 