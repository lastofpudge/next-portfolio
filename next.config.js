/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
    // loader: 'akamai',
    domains: ['http://localhost:3000/', 'https://lastofpudge.github.io/next-portfolio/']
    // path: '/'
  },
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }]
  }
}

module.exports = nextConfig
