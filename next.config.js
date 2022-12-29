/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.APP_ENV === 'production' ? process.env.BASE_PATH : '',
  images: {
    loader: 'akamai',
    path: process.env.APP_ENV === 'production' ? process.env.BASE_PATH : '',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;'
  },
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  }
}

module.exports = nextConfig
