/** @type {import('next').NextConfig} */

const withPWA =
  require('@ducanh2912/next-pwa').default({
    dest: 'public',

    register: true,

    skipWaiting: true,

    disable:
      process.env.NODE_ENV ===
      'development',
  })

/* ======================================================
   NEXT CONFIG
====================================================== */

const nextConfig = {
  /* STATIC EXPORT */

  output: 'export',

  /* IMAGE OPTIMIZATION */

  images: {
    unoptimized: true,
  },

  /* REACT */

  reactStrictMode: true,

  /* EXPERIMENTAL */

  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
    ],
  },

  /* COMPILER */

  compiler: {
    removeConsole:
      process.env.NODE_ENV ===
      'production',
  },

  /* ESLINT */

  eslint: {
    ignoreDuringBuilds: true,
  },

  /* TYPESCRIPT */

  typescript: {
    ignoreBuildErrors: true,
  },

  /* TRAILING SLASH */

  trailingSlash: true,
}

/* ======================================================
   EXPORT CONFIG
====================================================== */

module.exports =
  withPWA(nextConfig)