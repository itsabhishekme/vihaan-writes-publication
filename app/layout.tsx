import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"
import { Inter } from 'next/font/google'
import Script from 'next/script' // ✅ GA import

/* 🔤 FONT OPTIMIZATION */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

/* 🌐 SEO + METADATA */
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
    'spiritual writing',
    'karmic stories',
  ],

  authors: [{ name: 'Vihaan Writes' }],
  creator: 'Vihaan Writes',
  publisher: 'Vihaan Writes',

  openGraph: {
    title: 'Vihaan Writes',
    description:
      'Explore books, emotions, and soulful writing by Vihaan.',
    url: 'https://vihaanwrites.in',
    siteName: 'Vihaan Writes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vihaan Writes',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vihaan Writes',
    description:
      'Stories written before destiny unfolds.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: 'weGpqdMpx3QRhD0siqAtXZHzFfEqiYZs4-XTp08WmqA',
  },

  icons: {
    icon: '/favicon.ico',
  },
}

/* 📦 TYPES */
type RootLayoutProps = {
  children: ReactNode
}

/* 🌍 ROOT LAYOUT */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ⚡ PERFORMANCE BOOST */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* 🌐 THEME COLOR */}
        <meta name="theme-color" content="#000000" />

        {/* 📱 MOBILE OPTIMIZATION */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4S8ELNEWQZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-4S8ELNEWQZ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        suppressHydrationWarning
        className={`${inter.variable} min-h-screen bg-neutral-950 text-white antialiased`}
      >
        <div className="flex min-h-screen flex-col">

          {/* 🔝 NAVBAR */}
          <Navbar />

          {/* 📄 PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* 🔚 FOOTER */}
          <Footer />
        </div>

        {/* 📊 VERCEL ANALYTICS */}
        <Analytics />
      </body>
    </html>
  )
}