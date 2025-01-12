import React from 'react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </AuthProvider>
  )
}

export default MyApp
