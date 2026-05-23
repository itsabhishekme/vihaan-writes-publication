/** @type {import('next').NextConfig} */

const withPWA =
  require('@ducanh2912/next-pwa').default({
    dest: 'public',

    register: true,

    skipWaiting: true,

    disable:
      process.env.NODE_ENV ===
      'development',

    workboxOptions: {
      disableDevLogs: true,
    },
  })

const nextConfig = {
  output: 'export',

  reactStrictMode: true,

  trailingSlash: true,

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