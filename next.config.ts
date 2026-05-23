/** @type {import('next').NextConfig} */

const withPWA =
  require("@ducanh2912/next-pwa").default({

    dest: "public",

    register: true,

    skipWaiting: true,

    disable:
      process.env.NODE_ENV ===
      "development",

    cacheOnFrontEndNav: true,

    aggressiveFrontEndNavCaching: true,

    reloadOnOnline: true,

    sw: "sw.js",

    fallbacks: {
      document: "/offline.html",
    },

    workboxOptions: {

      cleanupOutdatedCaches: true,

      clientsClaim: true,

      navigateFallback: "/offline.html",

      runtimeCaching: [

        // HTML Pages
        {
          urlPattern: ({ request }: { request: Request }) =>
            request.destination === "document",

          handler: "NetworkFirst",

          options: {
            cacheName: "html-cache",

            expiration: {
              maxEntries: 50,
            },

            networkTimeoutSeconds: 10,
          },
        },

        // CSS + JS
        {
          urlPattern: ({ request }: { request: Request }) =>
            request.destination === "style" ||
            request.destination === "script",

          handler: "StaleWhileRevalidate",

          options: {
            cacheName: "static-resources",

            expiration: {
              maxEntries: 100,
            },
          },
        },

        // Images
        {
          urlPattern: ({ request }: { request: Request }) =>
            request.destination === "image",

          handler: "CacheFirst",

          options: {
            cacheName: "image-cache",

            expiration: {
              maxEntries: 200,

              maxAgeSeconds:
                60 * 60 * 24 * 30,
            },
          },
        },

        // Fonts
        {
          urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,

          handler: "CacheFirst",

          options: {
            cacheName: "google-fonts",

            expiration: {
              maxEntries: 20,

              maxAgeSeconds:
                60 * 60 * 24 * 365,
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

            networkTimeoutSeconds: 10,

            expiration: {
              maxEntries: 50,

              maxAgeSeconds:
                60 * 60 * 24,
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

  generateEtags: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,

    scrollRestoration: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV ===
      "production",
  },

  headers: async () => {
    return [
      {
        source: "/(.*)",

        headers: [

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },

          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=()",
          },
        ],
      },

      {
        source: "/sw.js",

        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },

          {
            key: "Cache-Control",
            value:
              "no-cache, no-store, must-revalidate",
          },
        ],
      },

      {
        source: "/manifest.json",

        headers: [
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
        ],
      },
    ];
  },
};

module.exports =
  withPWA(nextConfig);