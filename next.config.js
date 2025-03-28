/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tol-beta',
  assetPrefix: '/tol-beta/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 