/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tol-beta',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable static optimization for pages that need client-side data
  unstable_runtimeJS: true,
  unstable_JsPreload: false
}

module.exports = nextConfig 