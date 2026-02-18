import * as React from "react";
import Link from 'next/link';

interface NavigationItemProps {
  text: string;
  href: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ text, href }) => (
  <Link 
    href={href}
    className="self-stretch px-4 py-2 my-auto text-center hover:bg-sky-700 rounded-[32px] transition-colors"
  >
    {text}
  </Link>
);
