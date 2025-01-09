import React from 'react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
}

interface SocialLink {
  platform: string
  url: string
}

interface FooterProps {
  companyName?: string
  companyAddress?: string
  socialLinks?: SocialLink[]
  menuItems?: MenuItem[]
}

export function Footer({
  companyName = '会社名',
  companyAddress = '〒000-0000 東京都○○区××町1-1-1',
  socialLinks = [],
  menuItems = [],
}: FooterProps) {
  // ... コンポーネントの実装
} 