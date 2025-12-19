/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
    // appDir: true,
  },
  transpilePackages: ['@0xsequence/kit', '@0xsequence/kit-connectors']
}

module.exports = nextConfig
