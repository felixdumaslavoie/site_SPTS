/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //assetPrefix: 'https://collectifspts.org/'
  images: {
    loader: "default",
    domains: ['api.collectifspts.org']
  }
}

module.exports = nextConfig


