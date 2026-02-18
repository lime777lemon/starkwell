export const searchTags = [
  {
    text: "大腸内視鏡検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/220545b1ec06e9cd3cade6430e38387bdc23a74526c0e2b4e2f4c010e6b7cc6e?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "膝の修復-間節鏡",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f0fc0d4c6da8064459109dca7b30b3c27a364e850a4a3798025b21b7c4d64eb?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "感染症検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c20edf6189568c2dda682fd1ae11111580f2e1dc3e18b021f1a90424dcc4e04?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "視力・聴力検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/519d93e0f36deffbe15edcd001aca66be9e625f97c569d3c07716222446162fe?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "血圧測定",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a787d31479b8d78d8cf0faea6f42ceb3368d27c56259e9fc2e5910790ab1a86f?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "尿検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fac217d252c356e819cb33a3767b097e49399886d54c259e3995ffdaa387cabe?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "特定健康診査（メタボ健診）",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1aa09d1d3205aed86f85422ac54f9bb02c1f210a4daa9f05ee0cfa839ec34b8b?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "婦人科系検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48e05fe4d8368e09cc5b557f9a52630941b2fc6626710f637ba5773836890ce3?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "消化器系検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82e49265ab91e9ff4111d87d7f0637cea6a7c30ef5263a8ed5cd816bef49a5a4?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "骨密度検査",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c01cae69d4afdf0f8d7e9ad0ff7334ec6e6a210c8a6a223713073d8cddfa3de8?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "基本的な健康診断",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11f7b6de35076a70c6c458b5df4570d7e1e73ff50f176b50f882bd759c09bda1?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "がん検診（胃がん、大腸がん、肺がんなど）",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85c294fea9d4b195d8c8603799e0e0ba6f3edb9a79b29a2070681733cdf5cc97?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "身体測定",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8fca2df262a00bcaaaaf1635f8fd6fa581df884d325e3f2cd4c0346b32c23c5?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "コントラクト付きMRI",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcab22a3cf3b6704e4fa9423e770cd96daabe5105a271d735e21554bc54fe3ed?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
  {
    text: "トンシル及び/またはアデノイド除去",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/df6763f991b048fd6e34df5e96e998d2b47d66361d8f31a632627588d44f253e?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
  },
];

export const comparisonCards = Array(6).fill({
  title: "手根管修復手術",
  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed7bfd9b77cd4f5ae786bc39d5bf0f3db344e784573e28028e3cf6c8f7255653?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2",
});

export type ServiceKey = 'providers' | 'payers' | 'employers' | 'lifeSciences';

export interface ServiceTranslation {
  title: string;
  description: string;
}

export interface Service {
  key: ServiceKey;
  icon: string;
}

export const services: Service[] = [
  {
    key: 'providers',
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65cdfd66a82552fdc29fe7f7dfd00ba3059e7e822987c611f60e4a8412d236a1?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2"
  },
  {
    key: 'payers',
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be8e5691e664ea6c6718e8777ce4bdeb0621e26ab0fe13e4be878e6c9a66082b?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2"
  },
  {
    key: 'employers',
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f21ca1955c59b7f2f369887078b3d9971635ecad0cc2aebf8353039464216c83?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2"
  },
  {
    key: 'lifeSciences',
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/85b2c08c8eb7362ed9badf8c5c588e3f8f60f302d7fd947b14836861198fb622?placeholderIfAbsent=true&apiKey=1c0555d25dcd4ad784cc208488fa06e2"
  },
];

export const navigationItems = [
  { text: "ケアを検索", href: "#search" },
  { text: "リソース", href: "#resources" },
  { text: "プラットフォーム", href: "#platform" },
];
