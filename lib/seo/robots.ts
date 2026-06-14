import type { MetadataRoute } from "next";

/* -------------------------------------------------------------------------- */
/*                               SITE CONFIG                                  */
/* -------------------------------------------------------------------------- */

const SITE_URL =
  "https://vihaanwrites.in";

const DISALLOW_ROUTES = [
  "/api/",
  "/admin/",
  "/dashboard/",
  "/private/",
  "/_next/",
  "/mobile/",
  "/mobile/*",
];

const ALLOW_ROUTES = [
  "/",
  "/stories/",
  "/library/",
  "/books/",
  "/journal/",
  "/archive/",
  "/about/",
  "/contact/",
];

/* -------------------------------------------------------------------------- */
/*                                 ROBOTS.TS                                  */
/* -------------------------------------------------------------------------- */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ------------------------------------------------------------------ */
      /*                            GOOGLEBOT                               */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "Googlebot",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,

        crawlDelay: 0,
      },

      /* ------------------------------------------------------------------ */
      /*                               BINGBOT                              */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "Bingbot",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,

        crawlDelay: 1,
      },

      /* ------------------------------------------------------------------ */
      /*                              DUCKDUCKGO                            */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "DuckDuckBot",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,
      },

      /* ------------------------------------------------------------------ */
      /*                                BAIDU                               */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "Baiduspider",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,
      },

      /* ------------------------------------------------------------------ */
      /*                               YANDEX                               */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "Yandex",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,
      },

      /* ------------------------------------------------------------------ */
      /*                           FACEBOOK BOT                             */
      /* ------------------------------------------------------------------ */
      {
        userAgent:
          "facebookexternalhit",

        allow: "/",
      },

      /* ------------------------------------------------------------------ */
      /*                             TWITTER BOT                            */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "Twitterbot",

        allow: "/",
      },

      /* ------------------------------------------------------------------ */
      /*                           LINKEDIN BOT                             */
      /* ------------------------------------------------------------------ */
      {
        userAgent:
          "LinkedInBot",

        allow: "/",
      },

      /* ------------------------------------------------------------------ */
      /*                              CHATGPT                               */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "GPTBot",

        allow: [
          "/",
          "/stories/",
          "/books/",
          "/library/",
        ],

        disallow: [
          "/mobile/",
          "/admin/",
          "/dashboard/",
        ],
      },

      /* ------------------------------------------------------------------ */
      /*                             COMMON CRAWLER                         */
      /* ------------------------------------------------------------------ */
      {
        userAgent: "*",

        allow: ALLOW_ROUTES,

        disallow: DISALLOW_ROUTES,
      },
    ],

    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-stories.xml`,
      `${SITE_URL}/sitemap-books.xml`,
      `${SITE_URL}/sitemap-pages.xml`,
    ],

    host: SITE_URL,
  };
}

/* -------------------------------------------------------------------------- */
/*                              SEO CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

export const ROBOTS_CONFIG = {
  siteUrl: SITE_URL,

  host: SITE_URL,

  defaultCrawlDelay: 1,

  sitemap: [
    `${SITE_URL}/sitemap.xml`,
    `${SITE_URL}/sitemap-pages.xml`,
    `${SITE_URL}/sitemap-books.xml`,
    `${SITE_URL}/sitemap-stories.xml`,
  ],

  disallow: DISALLOW_ROUTES,

  allow: ALLOW_ROUTES,
};

/* -------------------------------------------------------------------------- */
/*                           HELPER FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

export function generateRobotsTxt(): string {
  return `
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /private/
Disallow: /_next/
Disallow: /mobile/

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`.trim();
}

export function isIndexableRoute(
  pathname: string
): boolean {
  const blockedRoutes = [
    "/mobile",
    "/admin",
    "/dashboard",
    "/private",
    "/api",
  ];

  return !blockedRoutes.some((route) =>
    pathname.startsWith(route)
  );
}

export function shouldNoIndex(
  pathname: string
): boolean {
  return !isIndexableRoute(pathname);
}

/* -------------------------------------------------------------------------- */
/*                          SEARCH ENGINE SETTINGS                            */
/* -------------------------------------------------------------------------- */

export const SEARCH_ENGINE_ACCESS = {
  google: true,
  bing: true,
  yahoo: true,
  duckduckgo: true,
  yandex: true,
  baidu: true,

  openai: true,
  anthropic: true,
  perplexity: true,
};

/* -------------------------------------------------------------------------- */
/*                          CRAWLER PRIORITY PAGES                            */
/* -------------------------------------------------------------------------- */

export const HIGH_PRIORITY_PAGES = [
  "/",
  "/about",
  "/books",
  "/stories",
  "/library",
  "/archive",
];

export const MEDIUM_PRIORITY_PAGES = [
  "/journal",
  "/contact",
  "/letters",
];

export const LOW_PRIORITY_PAGES = [
  "/privacy-policy",
  "/terms",
];

/* -------------------------------------------------------------------------- */
/*                            ADVANCED SEO RULES                              */
/* -------------------------------------------------------------------------- */

export const SEO_RULES = {
  indexMobileApp: false,

  indexAdminArea: false,

  indexDashboard: false,

  indexPrivatePages: false,

  indexStories: true,

  indexBooks: true,

  indexLibrary: true,

  indexArchive: true,

  indexJournal: true,

  allowImageIndexing: true,

  allowVideoIndexing: true,

  allowSnippetPreview: true,

  allowLargeImagePreview: true,
};

/* -------------------------------------------------------------------------- */
/*                              EXPORT DEFAULT                                */
/* -------------------------------------------------------------------------- */

export const robotsConfig =
  ROBOTS_CONFIG;