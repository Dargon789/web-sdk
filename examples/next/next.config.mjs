import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'encoding')
    return config
  }
  // transpilePackages: ['@0xsequence/kit', '@0xsequence/kit-wallet', '@0xsequence/kit-connectors', '@0xsequence/checkout']
}

export default withVanillaExtract(nextConfig)
