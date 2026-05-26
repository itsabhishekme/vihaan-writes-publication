/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",

  register: true,

  skipWaiting: true,

  disable: process.env.NODE_ENV === "development",

  cacheOnFrontEndNav: true,

  aggressiveFrontEndNavCaching: true,

  reloadOnOnline: true,

  sw: "sw.js",

  fallbacks: {
    document: "/offline/",
  },

  workboxOptions: {
    cleanupOutdatedCaches: true,

    clientsClaim: true,

    skipWaiting: true,

    navigateFallback: "/offline/",

    additionalManifestEntries: [
      {
        url: "/",
        revision: "1",
      },
      {
        url: "/offline/",
        revision: "1",
      },
    ],

    globPatterns: [
      "**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,woff,woff2}",
    ],

    runtimeCaching: [
      // HTML Pages
      {
        urlPattern: ({ request }: { request: { destination: string } }) =>
          request.destination === "document",

        handler: "CacheFirst",

        options: {
          cacheName: "html-cache",

          expiration: {
            maxEntries: 50,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // CSS + JS
      {
        urlPattern: ({ request }: { request: { destination: string } }) =>
          request.destination === "style" ||
          request.destination === "script",

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "static-resources",

          expiration: {
            maxEntries: 100,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Images
      {
        urlPattern: ({ request }: { request: { destination: string } }) =>
          request.destination === "image",

        handler: "CacheFirst",

        options: {
          cacheName: "image-cache",

          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 30,
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
          cacheName: "google-fonts",

          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // API Requests
      {
        urlPattern: /\/api\/.*$/,

        handler: "NetworkFirst",

        method: "GET",

        options: {
          cacheName: "api-cache",

          networkTimeoutSeconds: 5,

          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // External Assets
      {
        urlPattern: /^https?.*/i,

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "external-assets",

          expiration: {
            maxEntries: 200,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

const nextConfig = {
  output: "export",

  trailingSlash: true,

  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    scrollRestoration: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production",
  },
};

module.exports = withPWA(nextConfig);