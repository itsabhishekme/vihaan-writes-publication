// @ts-expect-error side-effect import of global CSS (handled by Next.js)
import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import SpotifyPodcastWidget from '@/components/SpotifyPodcastWidget'
import WhatsAppChannelWidget from '@/components/WhatsAppChannelWidget'

import { Analytics } from '@vercel/analytics/next'

import { Inter } from 'next/font/google'

import Script from 'next/script'

/* 🔤 FONT CONFIGURATION */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

/* 🌐 GLOBAL SEO + METADATA */
export const metadata: Metadata = {
  metadataBase: new URL('https://vihaanwrites.in'),

  title: {
    default: 'Vihaan Writes | Official Author Website',
    template: '%s | Vihaan Writes',
  },

  description:
    'Official website of Vihaan Writes. Explore soulful books, emotions, reflections, spiritual storytelling, karmic writing, and meaningful human experiences.',

  keywords: [
    'Vihaan Writes',
    'Vihaan',
    'author website',
    'writer',
    'books',
    'storytelling',
    'podcast',
    'blog',
    'karmic writing',
    'spiritual author',
    'soulful writing',
    'personal growth',
    'love stories',
    'destiny',
    'creative writing',
  ],

  authors: [
    {
      name: 'Vihaan Writes',
      url: 'https://vihaanwrites.in',
    },
  ],

  creator: 'Vihaan Writes',

  publisher: 'Vihaan Writes',

  category: 'Books & Literature',

  alternates: {
    canonical: 'https://vihaanwrites.in',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'weGpqdMpx3QRhD0siqAtXZHzFfEqiYZs4-XTp08WmqA',
  },

  openGraph: {
    title: 'Vihaan Writes',

    description:
      'Explore soulful books, stories, reflections, emotions, and meaningful writing by Vihaan.',

    url: 'https://vihaanwrites.in',

    siteName: 'Vihaan Writes',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vihaan Writes Official Website',
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

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

/* 📦 TYPES */
type RootLayoutProps = {
  children: ReactNode
}

/* 🌍 ROOT LAYOUT */
export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        {/* ⚡ PERFORMANCE OPTIMIZATION */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* 🎨 THEME */}
        <meta
          name="theme-color"
          content="#000000"
        />

        {/* 📱 RESPONSIVE */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* 🖼️ FAVICON */}
        <link
          rel="icon"
          href="/favicon.ico"
        />

        {/* ✅ GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4S8ELNEWQZ"
          strategy="afterInteractive"
        />

        {/* 📊 ANALYTICS SCRIPT */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

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
        className={`
          ${inter.variable}
          bg-black
          text-white
          antialiased
          overflow-x-hidden
          min-h-screen
          selection:bg-white
          selection:text-black
        `}
      >
        {/* 🌌 BACKGROUND EFFECTS */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-zinc-500/5 blur-3xl" />
        </div>

        {/* 📦 APP WRAPPER */}
        <div className="relative flex min-h-screen flex-col">

          {/* 🔝 NAVIGATION */}
          <header className="sticky top-0 z-40">
            <Navbar />
          </header>

          {/* 📄 MAIN CONTENT */}
          <main
            id="main-content"
            className="relative flex-1"
          >
            {children}
          </main>

          {/* 🔚 FOOTER */}
          <Footer />
        </div>

        {/* 💬 WHATSAPP CHANNEL WIDGET */}
        <WhatsAppChannelWidget />

        {/* 🎧 SPOTIFY PODCAST WIDGET */}
        <SpotifyPodcastWidget />

        {/* 📊 VERCEL ANALYTICS */}
        <Analytics />
      </body>
    </html>
  )
}