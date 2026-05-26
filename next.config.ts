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

  fallbacks: {
    document: "/offline",
  },

  workboxOptions: {
    cleanupOutdatedCaches: true,

    clientsClaim: true,

    skipWaiting: true,

    navigateFallback: "/offline",

    runtimeCaching: [
      // Pages
      {
        urlPattern: ({ request }: { request?: Request }) =>
          request?.mode === "navigate",

        handler: "NetworkFirst",

        options: {
          cacheName: "pages",

          networkTimeoutSeconds: 5,

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Static assets
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

      // JS + CSS
      {
        urlPattern: ({ request }: { request?: Request }) =>
          request?.destination === "script" ||
          request?.destination === "style",

        handler: "StaleWhileRevalidate",

        options: {
          cacheName: "static-assets",

          expiration: {
            maxEntries: 300,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
        },
      },

      // Images
      {
        urlPattern: ({ request }: { request?: Request }) =>
          request?.destination === "image",

        handler: "CacheFirst",

        options: {
          cacheName: "images",

          expiration: {
            maxEntries: 500,
            maxAgeSeconds: 60 * 60 * 24 * 60,
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
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  trailingSlash: false,

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