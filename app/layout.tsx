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
   Fully Typed Version (No ESLint no-explicit-any Errors)
========================================================= */

interface SiteMetadataShape {
  title?: string
  description?: string
  author?: string
  keywords?: string | string[]
  ogImage?: string
  twitter?: string
}

/**
 * Safely normalize imported metadata.
 * This prevents:
 * - no-explicit-any
 * - undefined access
 * - runtime crashes
 */

const metadataConfig: SiteMetadataShape =
  typeof siteMetadata === 'object' &&
    siteMetadata !== null
    ? (siteMetadata as SiteMetadataShape)
    : {}

/* =========================================================
   SITE URL
========================================================= */

const SITE_URL =
  'https://vihaan-writes.vercel.app'

/* =========================================================
   SITE NAME
========================================================= */

const DEFAULT_SITE_NAME =
  'Vihaan Writes | A world of soulful literature, karmic reflections, emotional storytelling, and timeless words written before destiny arrived.';

const SITE_NAME: string =
  typeof metadataConfig.title === 'string' &&
  metadataConfig.title.trim().length > 0
    ? metadataConfig.title.trim()
    : DEFAULT_SITE_NAME;

/* =========================================================
   SITE DESCRIPTION
========================================================= */

const SITE_DESCRIPTION: string =
  typeof metadataConfig.description === 'string' &&
    metadataConfig.description.trim().length > 0
    ? metadataConfig.description.trim()
    : [
      'Official website of Vihaan Writes.',
      'Explore books, blogs, podcasts, storytelling, reflections, spirituality, meaningful human experiences,',
      'personal growth, creative writing, memoirs, life lessons, self-discovery,',
      'literary reflections, inspirational stories, and thoughtful conversations.',
    ].join(' ')

/* =========================================================
   SITE AUTHOR
========================================================= */

const SITE_AUTHOR: string =
  typeof metadataConfig.author === 'string'
    ? metadataConfig.author.trim()
    : 'Vihaan Writes'

/* =========================================================
   SITE KEYWORDS
========================================================= */
const DEFAULT_KEYWORDS: string[] = [
  // Brand
  "Vihaan Writes",
  "Vihaan",
  "Vihaan Author",
  "Vihaan Books",
  "Vihaan Stories",
  "Official Vihaan Writes",

  // Writing
  "Author",
  "Writer",
  "Creative Writer",
  "Independent Author",
  "Modern Author",
  "Book Author",
  "Essay Writer",
  "Story Writer",
  "Content Creator",
  "Creative Writing",
  "Writing",
  "Writing Community",
  "Writing Inspiration",
  "Writing Journey",
  "Writing Process",
  "Writing Tips",
  "Literary Writing",
  "Narrative Writing",

  // Books
  "Books",
  "Book",
  "Novel",
  "Novels",
  "Short Stories",
  "Story Collection",
  "Literature",
  "Modern Literature",
  "Literary Fiction",
  "Inspirational Books",
  "Thought Provoking Books",
  "Personal Development Books",
  "Philosophy Books",
  "Psychology Books",

  // Storytelling
  "Storytelling",
  "Visual Storytelling",
  "Human Stories",
  "Meaningful Stories",
  "Inspirational Stories",
  "Life Stories",
  "Personal Stories",
  "Narrative",
  "Creative Storytelling",
  "Authentic Storytelling",

  // Blog
  "Blog",
  "Personal Blog",
  "Writing Blog",
  "Author Blog",
  "Life Blog",
  "Inspirational Blog",
  "Reflection Blog",
  "Thoughts",
  "Articles",
  "Essays",

  // Podcast
  "Podcast",
  "Podcast Host",
  "Inspirational Podcast",
  "Storytelling Podcast",
  "Personal Growth Podcast",
  "Mindfulness Podcast",
  "Life Podcast",
  "Creative Podcast",

  // Personal Growth
  "Personal Growth",
  "Self Improvement",
  "Self Discovery",
  "Self Reflection",
  "Self Awareness",
  "Personal Development",
  "Inner Growth",
  "Mindset",
  "Growth Mindset",
  "Transformation",
  "Life Journey",

  // Spiritual
  "Spiritual Writing",
  "Spiritual Growth",
  "Spirituality",
  "Consciousness",
  "Awareness",
  "Inner Peace",
  "Mindfulness",
  "Meditation",
  "Soul Journey",
  "Soulful Living",
  "Higher Consciousness",

  // Psychology
  "Psychology",
  "Human Psychology",
  "Emotional Intelligence",
  "Human Behavior",
  "Mental Clarity",
  "Identity",
  "Purpose",
  "Meaning",
  "Meaning of Life",
  "Human Experience",
  "Human Nature",

  // Philosophy
  "Philosophy",
  "Existential Philosophy",
  "Life Philosophy",
  "Wisdom",
  "Truth",
  "Purpose of Life",
  "Existence",
  "Reflection",
  "Deep Thinking",

  // Lifestyle
  "Daily Inspiration",
  "Motivation",
  "Life Lessons",
  "Reflections",
  "Meaningful Living",
  "Purpose Driven Life",
  "Creative Mind",
  "Ideas",
  "Learning",
  "Growth",

  // Community
  "Readers",
  "Book Lovers",
  "Writing Community",
  "Creative Community",
  "Literary Community",
  "Thinkers",
  "Dreamers",
  "Story Lovers",

  // SEO
  "Official Website",
  "Author Website",
  "Personal Website",
  "Creative Portfolio",
  "Digital Journal",
  "Knowledge Sharing",
  "Thought Leadership",
  "Online Writing",
  "Published Author",
  "Independent Creator",
];

const SITE_KEYWORDS: string[] =
  typeof metadataConfig.keywords === 'string'
    ? metadataConfig.keywords.split(',').map((k) => k.trim()).filter((k): k is string => !!k)
    : Array.isArray(metadataConfig.keywords) &&
      metadataConfig.keywords.length > 0
      ? metadataConfig.keywords.filter(
        (
          keyword
        ): keyword is string =>
          typeof keyword === 'string' &&
          keyword.trim().length > 0
      )
      : DEFAULT_KEYWORDS

/* =========================================================
   OPEN GRAPH IMAGE
========================================================= */

const SITE_OG_IMAGE: string =
  typeof metadataConfig.ogImage === 'string'
    ? metadataConfig.ogImage.trim()
    : `${SITE_URL}/og-image.png`

/* =========================================================
   TWITTER HANDLE
========================================================= */

const SITE_TWITTER: string =
  typeof metadataConfig.twitter === 'string'
    ? metadataConfig.twitter.trim()
    : '@vihaanwrites'

/* =========================================================
   ADDITIONAL OPTIONAL HELPERS
========================================================= */

const SITE_LANGUAGE = 'en'

const SITE_LOCALE = 'en_US'

const SITE_THEME_COLOR = '#14001f'

const SITE_APPLICATION_NAME =
  'Vihaan Writes'

const SITE_CATEGORY =
  'Books & Literature'

const SITE_PUBLISHER =
  SITE_AUTHOR

const SITE_CREATOR =
  SITE_AUTHOR

/* =========================================================
   EXPORTABLE SEO CONSTANTS
   (Optional future use)
========================================================= */

export const seoDefaults = {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
  SITE_KEYWORDS,
  SITE_OG_IMAGE,
  SITE_TWITTER,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_THEME_COLOR,
  SITE_APPLICATION_NAME,
  SITE_CATEGORY,
  SITE_PUBLISHER,
  SITE_CREATOR,
} as const

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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
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