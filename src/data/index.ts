export const navigationItems = [
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    key: 'costComparison',
    title: 'Cost Comparison',
    description: 'Compare healthcare costs across different providers',
    icon: '/icons/cost.svg',
  },
  {
    key: 'insuranceCoverage',
    title: 'Insurance Coverage',
    description: 'Understand your insurance coverage and benefits',
    icon: '/icons/insurance.svg',
  },
  {
    key: 'providerSearch',
    title: 'Provider Search',
    description: 'Find healthcare providers in your area',
    icon: '/icons/search.svg',
  },
]

export const comparisons = [
  {
    title: 'スタンダード',
    price: '¥10,000',
    features: ['基本機能', '24/7サポート', 'アップデート'],
  },
  {
    title: 'プロフェッショナル',
    price: '¥30,000',
    features: ['高度な機能', 'プライオリティサポート', 'カスタマイズ可能'],
    isPopular: true,
  },
  {
    title: 'エンタープライズ',
    price: '要相談',
    features: ['完全カスタマイズ', '専任サポート', 'SLA保証'],
  },
]

export const searchTags = [
  { label: 'クラウド', href: '/search?tag=cloud' },
  { label: 'セキュリティ', href: '/search?tag=security' },
  { label: 'AI', href: '/search?tag=ai' },
  { label: '開発', href: '/search?tag=development' },
  { label: 'コンサルティング', href: '/search?tag=consulting' },
] 