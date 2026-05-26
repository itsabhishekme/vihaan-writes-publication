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

  workboxOptions: {
    cleanupOutdatedCaches: true,

    clientsClaim: true,

    skipWaiting: true,

    runtimeCaching: [
      // HTML Pages
      {
        urlPattern: ({ request }: { request?: Request }) => {
          return request?.destination === "document";
        },

        handler: "NetworkFirst",

        options: {
          cacheName: "html-cache",

          networkTimeoutSeconds: 3,

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
            maxEntries: 100,
          },

          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },

      // Images
      {
        urlPattern: ({ request }: { request?: Request }) => {
          return request?.destination === "image";
        },

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