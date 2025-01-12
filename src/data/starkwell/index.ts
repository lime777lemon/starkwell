export interface NavigationItemProps {
  text: string;
  href: string;
}

export interface SearchTagProps {
  text: string;
  icon: string;
}

export interface ComparisonCardProps {
  title: string;
  icon: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export const searchTags: SearchTagProps[] = [
  {
    text: "大腸内視鏡検査",
    icon: "/icons/app.svg",
  },
  // ... 他のsearchTags
];

export const comparisonCards: ComparisonCardProps[] = [
  {
    title: "手根管修復手術",
    icon: "/icons/cost.svg",
  },
  // ... 他のcomparisonCards
];

export const services: ServiceCardProps[] = [
  {
    title: "医療提供者向け",
    description: "人員を増やしたり事業範囲を広げすぎることなく...",
    icon: "/icons/cloud.svg",
  },
  // ... 他のservices
];

export const navigationItems: NavigationItemProps[] = [
  {
    text: "ケアを検索",
    href: "#search",
  },
  // ... 他のnavigationItems
]; 