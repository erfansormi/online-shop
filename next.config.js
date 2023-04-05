/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [],
    // path prefix for Image Optimization API, useful with `loader`
    path: '/_next/image',
    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: 'default',
    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60 * 60,
    // ordered list of acceptable optimized image formats (mime types)
    formats: ['image/webp'],
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: false,
    // set the Content-Security-Policy header
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // sets the Content-Disposition header (inline or attachment)
    contentDispositionType: 'inline',
    // when true, every image will be unoptimized
    unoptimized: false,
    // limit of 50 objects
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
    DEV_URL: "http://localhost:4000",
    MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoiZXJmYW5zb3JtaSIsImEiOiJjbGZ6ZDNqYW4wOGxpM2dzMW1iM2ZvbDk0In0.IgMWSYInvXuNqCMKaUwJIQ",
    MAP_IR_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk2MTdkYzNlMTVjMDQ5ZGQwNjI1ZDBlM2QxNDI3MDY3NmMwODdlMTEwMTEzM2UwYjZmNzUxNDUyMjAyZTVhNjNhZGRmNTg0NjZmYWMwOGZiIn0.eyJhdWQiOiIyMTcxMyIsImp0aSI6Ijk2MTdkYzNlMTVjMDQ5ZGQwNjI1ZDBlM2QxNDI3MDY3NmMwODdlMTEwMTEzM2UwYjZmNzUxNDUyMjAyZTVhNjNhZGRmNTg0NjZmYWMwOGZiIiwiaWF0IjoxNjgwNTk2OTg5LCJuYmYiOjE2ODA1OTY5ODksImV4cCI6MTY4MzE4ODk4OSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.nN3pj5BjTOZ1SX9snSeUGuBN0vExpNCIMcUEUFLqbkK4pobOemFSSGm-hBfXJhmMT4nouQbihkKeUkEQhVlv9PSLcdmXeu31lSoC9ayKHbNFzLNsNmp7WXa4Dn26wvRKWzfMsldIIVv9qHloEufS7NFYIAiVTkw6jKDSq7wI_KUAhbuqA2UfTFL5UAFgPXnEUucCnEhgvWZwdR0w1XP9dwI8NeKBXilfEbeNee5G1L5IXpT9w61JrndaH6lxp3-v_C1PqsWBiFBaRlNxV13Wpn-LqthQ9jjJCup63G95RvFgGFLHYdw1CnHl0kGvnHZ-yfyPdk1bm53ZjL160fIz2g"
  }
}
module.exports = nextConfig;
