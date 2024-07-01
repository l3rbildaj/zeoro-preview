/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }, 
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }, 
    ]
  },
  i18n: {
    locales: ["en","fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
}

module.exports = nextConfig
