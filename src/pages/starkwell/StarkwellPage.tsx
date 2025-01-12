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

export default function StarkwellPage() {
  return (
    <div className="flex flex-col shadow-sm min-w-[390px]">
      <header
        className="flex flex-col px-8 w-full whitespace-nowrap bg-sky-600 max-md:px-5 max-md:max-w-full"
        role="banner"
      >
        <nav
          className="flex flex-wrap gap-10 justify-between items-center px-5 py-5 w-full max-md:max-w-full"
          role="navigation"
        >
          <div className="flex flex-col self-stretch my-auto text-xl font-bold leading-none text-white">
            <div className="flex overflow-hidden justify-center items-center">
              <Image
                src="/images/logo.png"
                alt="Starkwell Logo"
                width={40}
                height={40}
                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
              />
              <div className="gap-2.5 self-stretch p-2.5 my-auto w-[115px]">
                Starkwell
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-0 content-center items-center self-stretch pr-4 pl-4 my-auto text-base font-bold leading-5 text-white border-r border-solid border-r-zinc-200 min-w-[240px] max-md:max-w-full">
            {navigationItems.map((item: NavigationItemProps, index: number) => (
              <NavigationItem key={index} {...item} />
            ))}
            <Link 
              href="/signup"
              className="self-stretch px-4 py-2 my-auto text-center rounded-[32px] hover:bg-sky-700 transition-colors"
            >
              登録
            </Link>
            <Link 
              href="/login"
              className="self-stretch px-4 py-2 my-auto text-sm text-sky-600 bg-white rounded-[32px] hover:bg-gray-100 transition-colors"
            >
              ログイン
            </Link>
          </div>
        </nav>
      </header>

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
