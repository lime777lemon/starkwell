import React from 'react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ErrorBoundary } from '../components/ErrorBoundary'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default MyApp
