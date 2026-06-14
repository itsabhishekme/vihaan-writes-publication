/* =========================================================
   FILE: lib/seo/index.ts
   PROJECT: Vihaan Writes
   DESCRIPTION:
   Central SEO exports for metadata, robots, sitemap,
   structured data schemas, utility helpers and constants.

   Import anywhere using:

   import {
     siteMetadata,
     websiteSchema,
     authorSchema
   } from '@/lib/seo'

========================================================= */

/* =========================================================
   METADATA EXPORTS
========================================================= */

export * from './metadata'

/* =========================================================
   ROBOTS EXPORTS
========================================================= */

export { default as robots } from './robots'

/* =========================================================
   SITEMAP EXPORTS
========================================================= */

export { default as sitemap } from './sitemap'

/* =========================================================
   SCHEMA EXPORTS
========================================================= */

export * as schema from './schema'

/* =========================================================
   COMMON SEO CONSTANTS
========================================================= */

export const SEO_CONFIG = {
  siteName: 'Vihaan Writes',

  author: 'Vihaan Writes',

  siteUrl: 'https://vihaanwrites.in',

  title: 'Vihaan Writes',

  description:
    'Official website of Vihaan Writes. Explore books, blogs, podcasts, reflections, soulful storytelling, emotional journeys, personal growth, spirituality, and meaningful human experiences.',

  locale: 'en_US',

  language: 'en',

  type: 'website',

  category: 'Books & Literature',

  themeColor: '#14001f',

  ogImage: '/og-image.png',

  favicon: '/favicon.ico',

  appleTouchIcon: '/apple-touch-icon.png',

  twitterCard: 'summary_large_image',

  generator: 'Next.js',

  publisher: 'Vihaan Writes',

  creator: 'Vihaan Writes',
} as const

/* =========================================================
   SOCIAL LINKS
========================================================= */

export const SOCIAL_LINKS = {
  website: 'https://vihaanwrites.in',

  spotify:
    'https://open.spotify.com',

  youtube:
    'https://youtube.com',

  instagram:
    'https://instagram.com',

  linkedin:
    'https://linkedin.com',

  whatsapp:
    'https://whatsapp.com',
} as const

/* =========================================================
   DEFAULT SEO KEYWORDS
========================================================= */

export const DEFAULT_KEYWORDS = [
  'Vihaan Writes',
  'Vihaan',
  'author',
  'writer',
  'books',
  'author website',
  'blog',
  'podcast',
  'storytelling',
  'creative writing',
  'soulful writing',
  'personal growth',
  'spirituality',
  'destiny',
  'karma',
  'love',
  'relationships',
  'self discovery',
  'emotional healing',
  'literature',
  'human experiences',
  'reflection',
  'motivation',
  'inspiration',
  'memoir',
  'fiction',
  'non fiction',
  'book author',
  'indian author',
  'modern writer',
] as const

/* =========================================================
   PAGE PRIORITIES
========================================================= */

export const PAGE_PRIORITIES = {
  home: 1.0,

  books: 0.95,

  blog: 0.90,

  podcast: 0.85,

  about: 0.80,

  contact: 0.70,

  privacy: 0.50,

  terms: 0.50,
} as const

/* =========================================================
   CHANGE FREQUENCIES
========================================================= */

export const CHANGE_FREQUENCIES = {
  home: 'daily',

  books: 'weekly',

  blog: 'daily',

  podcast: 'weekly',

  about: 'monthly',

  contact: 'monthly',

  privacy: 'yearly',

  terms: 'yearly',
} as const

/* =========================================================
   CANONICAL URL HELPER
========================================================= */

export function getCanonicalUrl(
  path: string = ''
): string {
  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`

  return `${SEO_CONFIG.siteUrl}${normalizedPath}`
}

/* =========================================================
   OPEN GRAPH IMAGE HELPER
========================================================= */

export function getOgImageUrl(
  imagePath: string = SEO_CONFIG.ogImage
): string {
  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://')
  ) {
    return imagePath
  }

  return `${SEO_CONFIG.siteUrl}${imagePath}`
}

/* =========================================================
   PAGE TITLE HELPER
========================================================= */

export function createPageTitle(
  title?: string
): string {
  if (!title) {
    return SEO_CONFIG.siteName
  }

  return `${title} | ${SEO_CONFIG.siteName}`
}

/* =========================================================
   PAGE DESCRIPTION HELPER
========================================================= */

export function createDescription(
  description?: string
): string {
  return (
    description ||
    SEO_CONFIG.description
  )
}

/* =========================================================
   PAGE KEYWORDS HELPER
========================================================= */

export function createKeywords(
  keywords?: string[]
): string[] {
  if (!keywords?.length) {
    return [...DEFAULT_KEYWORDS]
  }

  return [
    ...DEFAULT_KEYWORDS,
    ...keywords,
  ]
}

/* =========================================================
   URL NORMALIZER
========================================================= */

export function normalizeUrl(
  url: string
): string {
  if (
    url.startsWith('http://') ||
    url.startsWith('https://')
  ) {
    return url
  }

  return `${SEO_CONFIG.siteUrl}${url}`
}

/* =========================================================
   BREADCRUMB HELPER
========================================================= */

export function createBreadcrumbSchema(
  items: {
    name: string
    url: string
  }[]
) {
  return {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: items.map(
      (item, index) => ({
        '@type': 'ListItem',

        position: index + 1,

        name: item.name,

        item: normalizeUrl(item.url),
      })
    ),
  }
}

/* =========================================================
   ARTICLE SCHEMA HELPER
========================================================= */

export function createArticleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
}: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
}) {
  return {
    '@context': 'https://schema.org',

    '@type': 'Article',

    headline: title,

    description,

    url: normalizeUrl(url),

    image: image
      ? normalizeUrl(image)
      : getOgImageUrl(),

    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
    },

    publisher: {
      '@type': 'Person',
      name: SEO_CONFIG.publisher,
    },

    datePublished: publishedTime,

    dateModified:
      modifiedTime || publishedTime,
  }
}

/* =========================================================
   BOOK SCHEMA HELPER
========================================================= */

export function createBookSchema({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',

    '@type': 'Book',

    name: title,

    description,

    image: image
      ? normalizeUrl(image)
      : getOgImageUrl(),

    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
    },
  }
}

/* =========================================================
   PODCAST SCHEMA HELPER
========================================================= */

export function createPodcastSchema(
  title: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',

    '@type': 'PodcastSeries',

    name: title,

    description,

    url: SEO_CONFIG.siteUrl,

    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
    },
  }
}

/* =========================================================
   DEFAULT EXPORT OBJECT
========================================================= */

const seo = {
  SEO_CONFIG,
  SOCIAL_LINKS,
  DEFAULT_KEYWORDS,
  PAGE_PRIORITIES,
  CHANGE_FREQUENCIES,
  getCanonicalUrl,
  getOgImageUrl,
  createPageTitle,
  createDescription,
  createKeywords,
  normalizeUrl,
  createBreadcrumbSchema,
  createArticleSchema,
  createBookSchema,
  createPodcastSchema,
}

export default seo