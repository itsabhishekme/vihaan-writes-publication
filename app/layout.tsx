import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://vihaanwrites.in'),

  title: {
    default: 'Vihaan Writes | Official Author Website',
    template: '%s | Vihaan Writes',
  },

  description:
    'Official website of Vihaan Writes. Explore books, soulful stories, reflections, and meaningful writing.',

  keywords: [
    'Vihaan Writes',
    'author website',
    'books',
    'writer',
    'storytelling',
    'blog',
    'Indian author',
    'self help books',
    'relationship books',
  ],

  authors: [{ name: 'Vihaan Writes' }],
  creator: 'Vihaan Writes',
  publisher: 'Vihaan Writes',

  openGraph: {
    title: 'Vihaan Writes',
    description:
      'Official website of Vihaan Writes. Explore books and soulful writing.',
    url: 'https://vihaanwrites.in',
    siteName: 'Vihaan Writes',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vihaan Writes',
    description:
      'Official website of Vihaan Writes. Explore books and soulful writing.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'F9oI4gvV-C2oI4Wg_6DI74z9Fh9Paw1GLEvGw6QjGQc',
  },

  category: 'books',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-neutral-950 text-white antialiased"
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}