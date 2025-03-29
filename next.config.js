/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tol-beta',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Handle client-side routes in static export
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 