import * as React from "react";
import { SearchTag } from "../../components/SearchTag";
import { ServiceCard } from "../../components/ServiceCard";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NavigationItem } from "../../components/NavigationItem";
import { 
  searchTags, 
  comparisonCards, 
  services, 
  navigationItems,
  SearchTagProps,
  ComparisonCardProps,
  ServiceCardProps,
  NavigationItemProps
} from "../../data/starkwell";
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';

export default function StarkwellPage() {
  return (
    <div className="flex flex-col shadow-sm min-w-[390px]">
      <Header navigationItems={[
        {
          text: "ケアを検索",
          href: "/search"
        },
        {
          text: "リソース",
          href: "/resources"
        },
        {
          text: "プラットフォーム",
          href: "/platform"
        }
      ]} />

      <main role="main">
        {/* Hero Section */}
        <section
          className="flex flex-col justify-center w-full text-white whitespace-nowrap max-md:max-w-full"
          aria-label="Hero"
        >
          {/* Hero content */}
        </section>

        {/* Search Tags Section */}
        <section
          className="flex flex-wrap gap-7 items-center px-2.5 pt-5 mt-6 w-full text-base font-bold leading-5 text-white max-md:max-w-full"
          aria-label="Search Tags"
        >
          {searchTags.map((tag: SearchTagProps, index: number) => (
            <SearchTag key={index} {...tag} />
          ))}
        </section>

        {/* Comparison Cards Section */}
        <section
          className="flex flex-wrap gap-5 items-start mt-10 w-full max-md:max-w-full"
          aria-label="Price Comparison"
        >
          {comparisonCards.map((card: ComparisonCardProps, index: number) => (
            <ComparisonCard key={index} {...card} />
          ))}
        </section>

        {/* Services Section */}
        <section
          className="flex flex-wrap gap-11 justify-center items-start py-12 mt-16 w-full min-w-[300px] max-md:mt-10 max-md:max-w-full"
          aria-label="Services"
        >
          {services.map((service: ServiceCardProps, index: number) => (
            <ServiceCard key={index} {...service} />
          ))}
        </section>
      </main>

      <footer
        className="flex flex-col w-full bg-white max-md:max-w-full"
        role="contentinfo"
      >
        {/* Footer content */}
      </footer>
    </div>
  );
}
