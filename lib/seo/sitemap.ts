import type { MetadataRoute } from "next";

/* -------------------------------------------------------------------------- */
/*                               SITE CONFIG                                  */
/* -------------------------------------------------------------------------- */

export const SITE_CONFIG = {
  url: "https://vihaanwrites.in",

  name: "Vihaan Writes",

  author: "Vihaan",

  description:
    "Stories, Books, Reflections, Memoirs and Human Experiences.",

  defaultPriority: 0.8,

  defaultChangeFrequency:
    "weekly" as const,
};

/* -------------------------------------------------------------------------- */
/*                              CONTENT TYPES                                 */
/* -------------------------------------------------------------------------- */

export interface SitemapEntry {
  url: string;

  lastModified?: string | Date;

  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  priority?: number;
}

export interface BookEntry {
  slug: string;

  title: string;

  updatedAt?: string;
}

export interface StoryEntry {
  slug: string;

  title: string;

  updatedAt?: string;
}

export interface LetterEntry {
  slug: string;

  title: string;

  updatedAt?: string;
}

/* -------------------------------------------------------------------------- */
/*                             STATIC ROUTES                                  */
/* -------------------------------------------------------------------------- */

export const STATIC_PAGES: SitemapEntry[] =
  [
    {
      url: "/",

      priority: 1.0,

      changeFrequency:
        "daily",
    },

    {
      url: "/about",

      priority: 0.9,

      changeFrequency:
        "monthly",
    },

    {
      url: "/books",

      priority: 0.95,

      changeFrequency:
        "weekly",
    },

    {
      url: "/library",

      priority: 0.95,

      changeFrequency:
        "weekly",
    },

    {
      url: "/stories",

      priority: 0.95,

      changeFrequency:
        "daily",
    },

    {
      url: "/archive",

      priority: 0.90,

      changeFrequency:
        "weekly",
    },

    {
      url: "/letters",

      priority: 0.88,

      changeFrequency:
        "weekly",
    },

    {
      url: "/journal",

      priority: 0.85,

      changeFrequency:
        "weekly",
    },

    {
      url: "/contact",

      priority: 0.75,

      changeFrequency:
        "monthly",
    },

    {
      url: "/privacy-policy",

      priority: 0.30,

      changeFrequency:
        "yearly",
    },

    {
      url: "/terms",

      priority: 0.30,

      changeFrequency:
        "yearly",
    },
  ];

/* -------------------------------------------------------------------------- */
/*                            FEATURED BOOKS                                  */
/* -------------------------------------------------------------------------- */

export const FEATURED_BOOKS: BookEntry[] =
  [
    {
      slug:
        "my-spouse-before-i-met-her",

      title:
        "My Spouse Before I Met Her",

      updatedAt:
        new Date().toISOString(),
    },
  ];

/* -------------------------------------------------------------------------- */
/*                              FEATURED STORIES                              */
/* -------------------------------------------------------------------------- */

export const FEATURED_STORIES: StoryEntry[] =
  [
    {
      slug:
        "the-child-who-learned-silence",

      title:
        "The Child Who Learned Silence",

      updatedAt:
        new Date().toISOString(),
    },

    {
      slug:
        "before-i-knew-my-own-name",

      title:
        "Before I Knew My Own Name",

      updatedAt:
        new Date().toISOString(),
    },
  ];

/* -------------------------------------------------------------------------- */
/*                              FEATURED LETTERS                              */
/* -------------------------------------------------------------------------- */

export const FEATURED_LETTERS: LetterEntry[] =
  [
    {
      slug:
        "letter-to-my-future-self",

      title:
        "Letter To My Future Self",

      updatedAt:
        new Date().toISOString(),
    },
  ];

/* -------------------------------------------------------------------------- */
/*                            HELPER FUNCTIONS                                */
/* -------------------------------------------------------------------------- */

export function createUrl(
  path: string
): string {
  return `${SITE_CONFIG.url}${path}`;
}

export function buildSitemapEntry(
  path: string,
  priority = 0.8,
  changeFrequency:
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly" = "weekly",
  lastModified?: string | Date
): MetadataRoute.Sitemap[number] {
  return {
    url: createUrl(path),

    lastModified:
      lastModified ||
      new Date(),

    changeFrequency,

    priority,
  };
}

/* -------------------------------------------------------------------------- */
/*                           BOOK SITEMAP ITEMS                               */
/* -------------------------------------------------------------------------- */

export function generateBookEntries(): MetadataRoute.Sitemap {
  return FEATURED_BOOKS.map(
    (book) =>
      buildSitemapEntry(
        `/books/${book.slug}`,
        0.90,
        "monthly",
        book.updatedAt
      )
  );
}

/* -------------------------------------------------------------------------- */
/*                          STORY SITEMAP ITEMS                               */
/* -------------------------------------------------------------------------- */

export function generateStoryEntries(): MetadataRoute.Sitemap {
  return FEATURED_STORIES.map(
    (story) =>
      buildSitemapEntry(
        `/stories/${story.slug}`,
        0.88,
        "monthly",
        story.updatedAt
      )
  );
}

/* -------------------------------------------------------------------------- */
/*                          LETTER SITEMAP ITEMS                              */
/* -------------------------------------------------------------------------- */

export function generateLetterEntries(): MetadataRoute.Sitemap {
  return FEATURED_LETTERS.map(
    (letter) =>
      buildSitemapEntry(
        `/letters/${letter.slug}`,
        0.85,
        "monthly",
        letter.updatedAt
      )
  );
}

/* -------------------------------------------------------------------------- */
/*                         STATIC SITEMAP ITEMS                               */
/* -------------------------------------------------------------------------- */

export function generateStaticEntries(): MetadataRoute.Sitemap {
  return STATIC_PAGES.map(
    (page) => ({
      url: createUrl(page.url),

      lastModified:
        page.lastModified ||
        new Date(),

      priority:
        page.priority ||
        SITE_CONFIG.defaultPriority,

      changeFrequency:
        page.changeFrequency ||
        SITE_CONFIG.defaultChangeFrequency,
    })
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN SITEMAP                                  */
/* -------------------------------------------------------------------------- */

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages =
    generateStaticEntries();

  const books =
    generateBookEntries();

  const stories =
    generateStoryEntries();

  const letters =
    generateLetterEntries();

  return [
    ...staticPages,
    ...books,
    ...stories,
    ...letters,
  ];
}

/* -------------------------------------------------------------------------- */
/*                         ADVANCED SITEMAP HELPERS                           */
/* -------------------------------------------------------------------------- */

export function generateCustomSitemap(
  entries: SitemapEntry[]
): MetadataRoute.Sitemap {
  return entries.map(
    (entry) => ({
      url: createUrl(entry.url),

      lastModified:
        entry.lastModified ||
        new Date(),

      priority:
        entry.priority ||
        0.8,

      changeFrequency:
        entry.changeFrequency ||
        "weekly",
    })
  );
}

export function generateImageSitemapEntry(
  path: string,
  imageUrl: string
) {
  return {
    url: createUrl(path),

    image: imageUrl,
  };
}

export function generateNewsSitemapEntry(
  path: string,
  publicationDate: string,
  title: string
) {
  return {
    url: createUrl(path),

    news: {
      publication: {
        name:
          SITE_CONFIG.name,

        language: "en",
      },

      publicationDate,

      title,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                          XML GENERATOR (OPTIONAL)                          */
/* -------------------------------------------------------------------------- */

export function generateXmlSitemap(
  urls: MetadataRoute.Sitemap
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
<url>
<loc>${url.url}</loc>
<lastmod>${new Date(
      url.lastModified || new Date()
    ).toISOString()}</lastmod>
<changefreq>${url.changeFrequency}</changefreq>
<priority>${url.priority}</priority>
</url>`
  )
  .join("")}
</urlset>`;
}

/* -------------------------------------------------------------------------- */
/*                        SEO PRIORITY CONFIGURATION                          */
/* -------------------------------------------------------------------------- */

export const SEO_PRIORITY = {
  HOME: 1.0,

  BOOKS: 0.95,

  STORIES: 0.95,

  LIBRARY: 0.95,

  ARCHIVE: 0.90,

  LETTERS: 0.88,

  JOURNAL: 0.85,

  CONTACT: 0.75,

  LEGAL: 0.30,
};

/* -------------------------------------------------------------------------- */
/*                            CHANGE FREQUENCIES                              */
/* -------------------------------------------------------------------------- */

export const CHANGE_FREQUENCY = {
  DAILY: "daily",

  WEEKLY: "weekly",

  MONTHLY: "monthly",

  YEARLY: "yearly",
} as const;

/* -------------------------------------------------------------------------- */
/*                            EXPORT UTILITIES                                */
/* -------------------------------------------------------------------------- */

export const SitemapUtils = {
  createUrl,
  buildSitemapEntry,
  generateBookEntries,
  generateStoryEntries,
  generateLetterEntries,
  generateStaticEntries,
  generateCustomSitemap,
  generateXmlSitemap,
};

/* -------------------------------------------------------------------------- */
/*                              EXPORT DEFAULT                                */
/* -------------------------------------------------------------------------- */

export {
  sitemap as generateSitemap,
};