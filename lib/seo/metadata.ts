import type { Metadata } from "next";

/* -------------------------------------------------------------------------- */
/*                               SITE CONFIG                                  */
/* -------------------------------------------------------------------------- */

export const SITE_CONFIG = {
  name: "Vihaan Writes",

  shortName: "Vihaan",

  title:
    "Vihaan Writes | Stories, Books, Reflections & Human Experiences",

  description:
    "Vihaan Writes is a digital home for stories, books, reflections, journals, personal letters and explorations of the human experience. Discover thoughtful writing, memoir-inspired narratives, emotional reflections and literary journeys.",

  url: "https://vihaan-writes.vercel.app",

  ogImage:
    "https://vihaan-writes.vercel.app/images/og/vihaan-writes-cover.jpg",

  creator: "Vihaan",

  author: "Vihaan",

  email: "hello@vihaan-writes.vercel.app",

  twitterHandle: "@vihaanwrites",

  keywords: [
    "Vihaan Writes",
    "Vihaan",
    "Author",
    "Writer",
    "Books",
    "Stories",
    "Memoir",
    "Reflections",
    "Letters",
    "Journal",
    "Literary Writing",
    "Creative Writing",
    "Human Experience",
    "Personal Growth",
    "Storytelling",
    "Emotional Writing",
    "Indian Author",
    "Dream Journal",
    "Soul Connections",
    "Spiritual Reflections",
    "Book Author",
    "Essay Writer",
    "Narratives",
    "Self Discovery",
    "Personal Essays",
  ],
};

/* -------------------------------------------------------------------------- */
/*                            GLOBAL WEBSITE SEO                              */
/* -------------------------------------------------------------------------- */

export const siteMetadata: Metadata = {
  metadataBase: new URL(
    SITE_CONFIG.url
  ),

  title: {
    default: SITE_CONFIG.title,

    template:
      "%s | Vihaan Writes",
  },

  description:
    SITE_CONFIG.description,

  applicationName:
    SITE_CONFIG.name,

  category: "Literature",

  keywords:
    SITE_CONFIG.keywords,

  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],

  creator:
    SITE_CONFIG.creator,

  publisher:
    SITE_CONFIG.author,

  generator:
    "Next.js 15",

  referrer:
    "origin-when-cross-origin",

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  robots: {
    index: true,

    follow: true,

    nocache: false,

    googleBot: {
      index: true,

      follow: true,

      noimageindex: false,

      "max-video-preview": -1,

      "max-image-preview":
        "large",

      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: SITE_CONFIG.url,

    siteName:
      SITE_CONFIG.name,

    title:
      SITE_CONFIG.title,

    description:
      SITE_CONFIG.description,

    images: [
      {
        url: SITE_CONFIG.ogImage,

        width: 1200,

        height: 630,

        alt: "Vihaan Writes",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      SITE_CONFIG.title,

    description:
      SITE_CONFIG.description,

    creator:
      SITE_CONFIG.twitterHandle,

    images: [
      SITE_CONFIG.ogImage,
    ],
  },

  verification: {
    google:
      "REPLACE_WITH_GOOGLE_VERIFICATION",

    yandex:
      "REPLACE_WITH_YANDEX_VERIFICATION",

    yahoo:
      "REPLACE_WITH_YAHOO_VERIFICATION",
  },

  appleWebApp: {
    capable: true,

    title:
      SITE_CONFIG.name,

    statusBarStyle:
      "black-translucent",
  },

  formatDetection: {
    telephone: false,

    email: false,

    address: false,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },

      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },

      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: [
      "/favicon.ico",
    ],
  },

  manifest: "/manifest.json",
};

/* -------------------------------------------------------------------------- */
/*                         PAGE METADATA GENERATOR                            */
/* -------------------------------------------------------------------------- */

interface PageMetadataProps {
  title: string;

  description: string;

  path?: string;

  image?: string;

  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  keywords = [],
}: PageMetadataProps): Metadata {
  const pageUrl = `${SITE_CONFIG.url}${path}`;

  const pageImage =
    image || SITE_CONFIG.ogImage;

  return {
    title,

    description,

    keywords: [
      ...SITE_CONFIG.keywords,
      ...keywords,
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title,

      description,

      url: pageUrl,

      siteName:
        SITE_CONFIG.name,

      type: "article",

      images: [
        {
          url: pageImage,

          width: 1200,

          height: 630,

          alt: title,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [pageImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                           BOOK PAGE METADATA                               */
/* -------------------------------------------------------------------------- */

export function generateBookMetadata(
  title: string,
  description: string,
  coverImage: string,
  slug: string
): Metadata {
  return {
    title,

    description,

    keywords: [
      title,
      "Book",
      "Author",
      "Vihaan",
      "Literature",
    ],

    openGraph: {
      title,

      description,

      type: "book",

      url: `${SITE_CONFIG.url}/book/${slug}`,

      images: [
        {
          url: coverImage,

          width: 1200,

          height: 630,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [coverImage],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                          ARTICLE PAGE METADATA                             */
/* -------------------------------------------------------------------------- */

export function generateArticleMetadata({
  title,
  description,
  image,
  slug,
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  image: string;
  slug: string;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  return {
    title,

    description,

    openGraph: {
      type: "article",

      title,

      description,

      url: `${SITE_CONFIG.url}/stories/${slug}`,

      publishedTime,

      modifiedTime,

      authors: [
        SITE_CONFIG.author,
      ],

      images: [
        {
          url: image,

          width: 1200,

          height: 630,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [image],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                          MOBILE APP NOINDEX SEO                            */
/* -------------------------------------------------------------------------- */

export const mobileMetadata: Metadata = {
  title:
    "Vihaan Writes Mobile",

  description:
    "Mobile application experience",

  robots: {
    index: false,

    follow: false,

    nocache: true,
  },
};

/* -------------------------------------------------------------------------- */
/*                            STRUCTURED DATA                                 */
/* -------------------------------------------------------------------------- */

export const organizationSchema = {
  "@context":
    "https://schema.org",

  "@type": "Organization",

  name: SITE_CONFIG.name,

  url: SITE_CONFIG.url,

  logo: `${SITE_CONFIG.url}/logo.png`,

  founder:
    SITE_CONFIG.author,

  description:
    SITE_CONFIG.description,
};

export const websiteSchema = {
  "@context":
    "https://schema.org",

  "@type": "WebSite",

  name: SITE_CONFIG.name,

  url: SITE_CONFIG.url,

  description:
    SITE_CONFIG.description,

  author: {
    "@type": "Person",

    name: SITE_CONFIG.author,
  },
};

export const authorSchema = {
  "@context":
    "https://schema.org",

  "@type": "Person",

  name: "Vihaan",

  url: SITE_CONFIG.url,

  jobTitle: "Author",

  description:
    "Writer, storyteller and creator of Vihaan Writes.",

  sameAs: [
    SITE_CONFIG.url,
  ],
};

/* -------------------------------------------------------------------------- */
/*                            EXPORT DEFAULT                                  */
/* -------------------------------------------------------------------------- */

export default siteMetadata;