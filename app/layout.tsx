import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AnimatedBackground from '@/components/layout/animated-background'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.harviera.example'),
  title: {
    default: 'Harviera IT Solutions',
    template: '%s – Harviera',
  },
  description: 'Pastel glassmorphism marketing site built with Next.js',
  openGraph: {
    title: 'Harviera IT Solutions',
    description: 'Modern engineering + human-centered design',
    url: 'https://www.harviera.example',
    siteName: 'Harviera IT Solutions',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Harviera pastel glassmorphism',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harviera IT Solutions',
    description: 'Modern engineering + human-centered design',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <AnimatedBackground />
        <Script
          src="https://plausible.io/js/script.js"
          data-domain="harviera.example"
          strategy="lazyOnload"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
