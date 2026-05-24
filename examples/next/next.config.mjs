import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'encoding')
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@base-org/account': false,
      '@gemini-wallet/core': false,
      '@react-native-async-storage/async-storage': false,
      '@safe-global/safe-apps-provider': false,
      '@safe-global/safe-apps-sdk': false,
      porto: false,
      'porto/internal': false
    }
    return config
  }
  // transpilePackages: ['@0xsequence/kit', '@0xsequence/kit-wallet', '@0xsequence/kit-connectors', '@0xsequence/checkout']
}

export default withVanillaExtract(nextConfig)
