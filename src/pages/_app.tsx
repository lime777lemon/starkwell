import React from 'react'
import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import '@/styles/globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

// Builder.ioの初期化
if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY)
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
