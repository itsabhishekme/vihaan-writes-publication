import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const withPWA = withPWAInit({
  dest: "public",

  register: true,

  disable: isDev,

  cacheOnFrontEndNav: true,

  aggressiveFrontEndNavCaching: true,

  reloadOnOnline: true,

  sw: "sw.js",

  workboxOptions: {
    cleanupOutdatedCaches: true,

    clientsClaim: true,

    skipWaiting: true,

    navigationPreload: true,

    navigateFallbackDenylist: [
      /^\/api\//,
      /^\/_next\//,
      /\/[^/?]+\.[^/]+$/,
    ],

    runtimeCaching: [
      // HTML Pages / App Routes
      {
        urlPattern: ({ request }) =>
          request?.mode === "navigate",

        handler: "NetworkFirst",

        options: {
          cacheName: "pages-cache",

          networkTimeoutSeconds: 5,

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },

          matchOptions: {
            ignoreSearch: true,
          },
        },
      },

      // Next.js Static Assets
      {
        urlPattern: /^\/_next\/static\/.*/i,

        handler: "CacheFirst",

        options: {
          cacheName: "next-static",

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // CSS + JS
      {
        urlPattern: ({ request }) =>
          request?.destination === "style" ||
          request?.destination === "script",

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "static-assets",

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Images
      {
        urlPattern: ({ request }) =>
          request?.destination === "image",

        handler: "CacheFirst",

        options: {
          cacheName: "images",

          expiration: {
            maxEntries: 500,
            maxAgeSeconds: 60 * 60 * 24 * 60,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Fonts
      {
        urlPattern:
          /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,

        handler: "CacheFirst",

        options: {
          cacheName: "fonts",

          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // APIs
      {
        urlPattern: /\/api\/.*$/,

        handler: "NetworkFirst",

        method: "GET",

        options: {
          cacheName: "api-cache",

          networkTimeoutSeconds: 5,

          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // External Requests
      {
        urlPattern: /^https?.*/i,

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "external-assets",

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  // IMPORTANT for Capacitor + static export
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withPWA(nextConfig);