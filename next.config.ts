/** @type {import('next').NextConfig} */

const withPWA =
  require('@ducanh2912/next-pwa').default({
    dest: 'public',

    register: true,

    skipWaiting: true,

    disable:
      process.env.NODE_ENV ===
      'development',

    cacheOnFrontEndNav: true,

    aggressiveFrontEndNavCaching: true,

    reloadOnOnline: true,

    workboxOptions: {
      cleanupOutdatedCaches: true,

      clientsClaim: true,

      navigateFallback: '/',

      runtimeCaching: [
        {
          urlPattern: /^https?.*/i,

          handler: 'NetworkFirst',

          options: {
            cacheName:
              'offlineCache',

            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },
  })

const nextConfig = {
  output: 'export',

  trailingSlash: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
    ],
  },
}

module.exports =
  withPWA(nextConfig)