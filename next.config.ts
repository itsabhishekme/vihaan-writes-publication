/** @type {import('next').NextConfig} */

const nextConfig = {

  // Static export for Capacitor
  output: "export",

  // Better routing support
  trailingSlash: true,

  // Disable Next.js image optimization
  // required for static export
  images: {
    unoptimized: true,
  },

  // Strict mode for better debugging
  reactStrictMode: true,

  // Faster builds
  swcMinify: true,

  // Prevent build issues with Android WebView
  poweredByHeader: false,

  // Optional: ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: ignore TypeScript build errors
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;