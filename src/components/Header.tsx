import * as React from "react";
import { NavigationItem } from "./NavigationItem"; // Corrected import
import { NavigationItemProps } from "../types";
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  navigationItems: NavigationItemProps[];
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  return (
    <header
      className="flex flex-col px-8 w-full whitespace-nowrap bg-sky-600 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <nav
        className="flex flex-wrap gap-10 justify-between items-center px-5 py-5 w-full max-md:max-w-full"
        role="navigation"
      >
        <div className="flex flex-col self-stretch my-auto text-xl font-bold leading-none text-white">
          <Link href="/" className="flex overflow-hidden justify-center items-center">
            <Image
              loading="lazy"
              src="/icons/04stark.jpg"
              alt="Starkwell Logo"
              width={40}
              height={40}
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="gap-2.5 self-stretch p-2.5 my-auto w-[115px]">
              Starkwell
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap gap-0 content-center items-center self-stretch pr-4 pl-4 my-auto text-base font-bold leading-5 text-white border-r border-solid border-r-zinc-200 min-w-[240px] max-md:max-w-full">
          {navigationItems.map((item, index) => (
            <NavigationItem key={index} {...item} />
          ))}
          <Link href="/contact" className="self-stretch px-4 py-2 my-auto text-center rounded-[32px]">
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
