/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ak-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ak-portfolio/' : '',
  experimental: {
    // optimizeCss: true, // Removed to avoid critters dependency
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
    return config
  },
}

module.exports = nextConfig 