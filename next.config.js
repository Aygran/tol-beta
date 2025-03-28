/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tol-beta',
  assetPrefix: '/tol-beta/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lucid.app',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 