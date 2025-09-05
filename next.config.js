/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'konek.app',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig