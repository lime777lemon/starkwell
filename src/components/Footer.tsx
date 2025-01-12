import * as React from "react";
import { NavigationItemProps } from "../types";

interface FooterProps {
  navigationItems: NavigationItemProps[];
}

const Footer: React.FC<FooterProps> = ({ navigationItems }) => {
  return (
    <footer className="flex flex-col items-center justify-center w-full p-4 bg-sky-600 text-white">
      <nav className="flex flex-wrap gap-4 justify-center">
        {navigationItems.map((item, index) => (
          <a key={index} href={item.href} className="text-white hover:underline">
            {item.text}
          </a>
        ))}
      </nav>
      <div className="mt-4 text-sm">
        &copy; {new Date().getFullYear()} Starkwell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
