import * as React from "react";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="flex flex-col w-full bg-sky-600 relative z-50"
      role="banner"
    >
      <nav
        className="flex justify-between items-center px-5 py-5 w-full container mx-auto"
        role="navigation"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icons/03starkwell.jpg"
            alt="Starkwell Logo"
            width={40}
            height={40}
            className="object-contain w-10 h-10"
          />
          <span className="text-xl font-bold text-white">
            Starkwell
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="hidden max-md:block text-white z-50"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center justify-end space-x-4">
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
            onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
            className="px-4 py-2 text-white hover:bg-sky-700 rounded-[32px] transition-colors"
          >
            {language === 'ja' ? 'EN' : '日本語'}
          </button>
        </div>

        <div
          className={`
            absolute top-full left-0 right-0 bg-sky-600 shadow-lg
            transform transition-all duration-300 ease-in-out z-40
            ${isMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2'
            }
            md:hidden
          `}
        >
          <div className="flex flex-col py-2 border-t border-sky-500">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-6 py-3 text-white hover:bg-sky-700 transition-colors text-base"
                onClick={toggleMenu}
              >
                {item.text}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="px-6 py-3 text-white hover:bg-sky-700 transition-colors text-base"
              onClick={toggleMenu}
            >
              {t.contact}
            </Link>
            <button
              onClick={() => {
                setLanguage(language === 'ja' ? 'en' : 'ja');
                toggleMenu();
              }}
              className="px-6 py-3 text-white hover:bg-sky-700 transition-colors text-left text-base w-full"
            >
              {language === 'ja' ? 'EN' : '日本語'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
