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
  });

const nextConfig = {
  output: "export",

  trailingSlash: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  },
};

module.exports =
  withPWA(nextConfig);