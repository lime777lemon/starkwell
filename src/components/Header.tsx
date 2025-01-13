import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { NavigationItemProps } from "../types";
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface HeaderProps {
  navigationItems: NavigationItemProps[];
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  console.log('Current language:', language);
  console.log('Translations:', t);

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <header
      className="flex flex-col px-8 w-full whitespace-nowrap bg-sky-600 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <nav
        className="flex justify-between items-center px-5 py-5 w-full max-md:max-w-full"
        role="navigation"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icons/04stark.jpg"
            alt="Starkwell Logo"
            width={40}
            height={40}
            className="object-contain w-10 h-10"
          />
          <span className="text-xl font-bold text-white">
            Starkwell
          </span>
        </Link>

        <div className="flex items-center justify-end space-x-4">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
          <Link 
            href="/contact" 
            className="px-4 py-2 text-white hover:bg-sky-700 rounded-[32px] transition-colors"
          >
            {t.contact}
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-white hover:bg-sky-700 rounded-[32px] transition-colors"
          >
            {language === 'ja' ? 'EN' : '日本語'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
