import React from 'react'
import Link from 'next/link'
import { NavigationItem } from './NavigationItem'
import { LanguageSwitch } from './LanguageSwitch'

const navigationItems = [
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="flex flex-col px-8 w-full whitespace-nowrap bg-sky-600 max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 justify-between items-center px-5 py-5 w-full max-md:max-w-full">
        <Link href="/" className="flex flex-col self-stretch my-auto text-xl font-bold leading-none text-white">
          <div className="flex overflow-hidden justify-center items-center">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a87b7b20617d91330454d89b000a03bb8bd4d1956ef817b2a7fe934f1b6da6a1" 
              alt="Starkwell Logo" 
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" 
            />
            <div className="gap-2.5 self-stretch p-2.5 my-auto w-[115px]">Starkwell</div>
          </div>
        </Link>

        <div className="flex flex-wrap gap-4 items-center">
          <LanguageSwitch />
          <div className="flex flex-wrap gap-0 content-center items-center self-stretch pr-4 pl-4 my-auto text-base font-bold leading-5 text-white">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 