import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public",

  register: true,

  disable: process.env.NODE_ENV === "development",

  cacheOnFrontEndNav: true,

  aggressiveFrontEndNavCaching: true,

  reloadOnOnline: true,

  sw: "sw.js",

  extendDefaultRuntimeCaching: true,

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
      // ALL HTML / ROUTES
      {
        urlPattern: ({ request }: { request?: Request }) => {
          return request?.mode === "navigate";
        },

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

      // NEXT STATIC FILES
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
        urlPattern: ({ request }: { request?: Request }) => {
          return (
            request?.destination === "style" ||
            request?.destination === "script"
          );
        },

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "static-resources",

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // IMAGES
      {
        urlPattern: ({ request }: { request?: Request }) => {
          return request?.destination === "image";
        },

        handler: "CacheFirst",

        options: {
          cacheName: "image-cache",

          expiration: {
            maxEntries: 500,
            maxAgeSeconds: 60 * 60 * 24 * 60,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // FONTS
      {
        urlPattern:
          /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,

        handler: "CacheFirst",

        options: {
          cacheName: "google-fonts",

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

      // EXTERNAL
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

export default withPWA(nextConfig);