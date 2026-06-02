/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.prod.website-files.com', // ✅ allow your image domain
      'bymemet.vercel.app',
      'static.wixstatic.com',
      'i.vimeocdn.com',
      'images.unsplash.com',
      'alfred.nl',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],
  },
}

export default nextConfig;
