import './globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import PWARegister from '@/components/PWARegister'

import SpotifyPodcastWidget from '@/components/SpotifyPodcastWidget'
import WhatsAppChannelWidget from '@/components/WhatsAppChannelWidget'

import LoaderProvider from '@/providers/LoaderProvider'

import { Analytics } from '@vercel/analytics/next'

import { Inter } from 'next/font/google'

import Script from 'next/script'

/* =========================================================
   SEO IMPORTS
========================================================= */

import {
  siteMetadata,
  websiteSchema,
  authorSchema,
} from '@/lib/seo'

/* =========================================================
   FONT CONFIGURATION
========================================================= */

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

/* =========================================================
   FALLBACK SEO VALUES
   Prevents runtime/type errors if some fields
   are missing from your metadata configuration.
========================================================= */

const SITE_URL =
  'https://vihaan-writes.vercel.app'

const SITE_NAME =
  typeof (siteMetadata as any)?.title ===
  'string'
    ? (siteMetadata as any).title
    : 'Vihaan Writes'

const SITE_DESCRIPTION =
  typeof (siteMetadata as any)?.description ===
  'string'
    ? (siteMetadata as any).description
    : 'Official website of Vihaan Writes. Explore books, blogs, podcasts, storytelling, reflections, spirituality, and meaningful human experiences.'

const SITE_AUTHOR =
  typeof (siteMetadata as any)?.author ===
  'string'
    ? (siteMetadata as any).author
    : 'Vihaan Writes'

const SITE_KEYWORDS =
  Array.isArray(
    (siteMetadata as any)?.keywords
  )
    ? (siteMetadata as any).keywords
    : [
        'Vihaan Writes',
        'Author',
        'Books',
        'Blog',
        'Podcast',
        'Storytelling',
        'Writer',
        'Spiritual Writing',
        'Personal Growth',
      ]

const SITE_OG_IMAGE =
  typeof (siteMetadata as any)?.ogImage ===
  'string'
    ? (siteMetadata as any).ogImage
    : `${SITE_URL}/og-image.png`

const SITE_TWITTER =
  typeof (siteMetadata as any)?.twitter ===
  'string'
    ? (siteMetadata as any).twitter
    : '@vihaanwrites'

/* =========================================================
   GLOBAL SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_AUTHOR}`,
  },

  description: SITE_DESCRIPTION,

  keywords: SITE_KEYWORDS,

  authors: [
    {
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
  ],

  creator: SITE_AUTHOR,

  publisher: SITE_AUTHOR,

  category: 'Books & Literature',

  applicationName: 'Vihaan Writes',

  referrer: 'origin-when-cross-origin',

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      noimageindex: false,

      'max-video-preview': -1,

      'max-image-preview': 'large',

      'max-snippet': -1,
    },
  },

  openGraph: {
    title: SITE_NAME,

    description: SITE_DESCRIPTION,

    url: SITE_URL,

    siteName: SITE_NAME,

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: SITE_OG_IMAGE,

        width: 1200,

        height: 630,

        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: SITE_NAME,

    description: SITE_DESCRIPTION,

    creator: SITE_TWITTER,

    images: [SITE_OG_IMAGE],
  },

  icons: {
    icon: '/favicon.ico',

    shortcut: '/favicon.ico',

    apple: '/apple-touch-icon.png',
  },

  verification: {},

  other: {
    'theme-color': '#14001f',
  },
}

/* =========================================================
   TYPES
========================================================= */

type RootLayoutProps = {
  children: ReactNode
}

/* =========================================================
   ROOT LAYOUT
========================================================= */

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
        {/* =====================================================
            PERFORMANCE
        ===================================================== */}

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          rel="dns-prefetch"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="dns-prefetch"
          href="https://fonts.gstatic.com"
        />

        {/* =====================================================
            PWA
        ===================================================== */}

        <link
          rel="manifest"
          href="/manifest.json"
        />

        <meta
          name="theme-color"
          content="#14001f"
        />

        <meta
          name="mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Vihaan Writes"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />

        {/* =====================================================
            STRUCTURED DATA
        ===================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              websiteSchema
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              authorSchema
            ),
          }}
        />

        {/* =====================================================
            GOOGLE ANALYTICS
        ===================================================== */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4S8ELNEWQZ"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer =
              window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag(
              'config',
              'G-4S8ELNEWQZ',
              {
                page_path:
                  window.location.pathname,
              }
            );
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
        {/* =====================================================
            PWA REGISTER
        ===================================================== */}

        <PWARegister />

        {/* =====================================================
            APP PROVIDERS
        ===================================================== */}

        <LoaderProvider>
          {/* =================================================
              GLOBAL BACKGROUND EFFECTS
          ================================================= */}

          <div className="fixed inset-0 -z-50 overflow-hidden">
            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-300/5 blur-3xl" />
          </div>

          {/* =================================================
              APPLICATION WRAPPER
          ================================================= */}

          <div className="relative flex min-h-screen flex-col">
            {/* =============================================
                HEADER
            ============================================= */}

            <header className="sticky top-0 z-40">
              <Navbar />
            </header>

            {/* =============================================
                MAIN CONTENT
            ============================================= */}

            <main
              id="main-content"
              className="relative flex-1"
            >
              {children}
            </main>

            {/* =============================================
                FOOTER
            ============================================= */}

            <Footer />
          </div>

          {/* =============================================
              FLOATING WIDGETS
          ============================================= */}

          <WhatsAppChannelWidget />

          <SpotifyPodcastWidget />

          {/* =============================================
              ANALYTICS
          ============================================= */}

          <Analytics />
        </LoaderProvider>
      </body>
    </html>
  )
}