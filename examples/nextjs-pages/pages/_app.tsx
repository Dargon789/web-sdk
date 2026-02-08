import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { KitProvider } from '@0xsequence/kit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon } from 'wagmi/chains'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'

// eslint-disable-next-line import/no-default-export
export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

const { chains, publicClient, webSocketPublicClient } = configureChains([polygon, mainnet], [publicProvider()])

const connectors = getDefaultConnectors({
  chains,
  walletConnectProjectId: 'project_id',
  defaultChainId: 137
})

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <KitProvider>{children}</KitProvider>
    </WagmiConfig>
  )
}
