/** @type {import('next').NextConfig} */

// let env = {}

// if (process.env.NODE_ENV === 'production') {
//   env = {
//     basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//     assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
//   }
// }

const nextConfig = {
  // ...env,
  images: {
    dangerouslyAllowSVG: true
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  }
}

module.exports = nextConfig
