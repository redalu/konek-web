import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konek - Connect Through Activities',
  description: 'Join activities and connect with like-minded people',
  metadataBase: new URL('https://konek.app'),
  openGraph: {
    title: 'Konek',
    description: 'Join activities and connect with like-minded people',
    url: 'https://konek.app',
    siteName: 'Konek',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konek',
    description: 'Join activities and connect with like-minded people',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}