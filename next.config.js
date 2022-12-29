/** @type {import('next').NextConfig} */

let env = {}

if (process.env.NODE_ENV === 'production') {
  env = {
    images: {
      loader: 'akamai',
      path: '/next-portfolio/',
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;'
    }
  }
}

const nextConfig = {
  ...env,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  }
}

module.exports = nextConfig
