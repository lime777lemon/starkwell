import React from 'react'
import Link from 'next/link'

interface SearchTagProps {
  label: string
  href: string
}

export function SearchTag({ label, href }: SearchTagProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
    >
      {label}
    </Link>
  )
} 