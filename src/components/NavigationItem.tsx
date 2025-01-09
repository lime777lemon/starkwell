import React from 'react'
import Link from 'next/link'

interface NavigationItemProps {
  label: string
  href: string
}

export function NavigationItem({ label, href }: NavigationItemProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-white hover:opacity-60 transition-opacity"
    >
      {label}
    </Link>
  )
} 