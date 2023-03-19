/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dkstatics-public.digikala.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'online-shop.storage.iran.liara.space',
        port: '',
        pathname: '/**',
      }
    ],
  },
  env: {
    URL: "https://onlineshop.iran.liara.run",
    DEV_URL: "http://localhost:4000"
  }
}
module.exports = nextConfig;
