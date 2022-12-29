/** @type {import('next').NextConfig} */

let env

if (process.env.APP_ENV === 'production') {
  env = {
    images: {
      loader: 'akamai',
      path: './',
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;'
    }
  }
} else {
  env = {}
}

const nextConfig = {
  reactStrictMode: true,
  env,
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  }
}

module.exports = nextConfig
