'use client'

<<<<<<<< HEAD:examples/next/src/app/Web3Provider.tsx
========
import { KitProvider } from '@0xsequence/kit/components'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
>>>>>>>> upstream/next-ssr-improvements:examples/next/src/app/Providers.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { State, WagmiProvider } from 'wagmi'

<<<<<<<< HEAD:examples/next/src/app/Web3Provider.tsx
import { wagmiConfig, kitConfig } from './config'
import { KitProvider } from '@0xsequence/kit'
import { KitWalletProvider } from '@0xsequence/kit-wallet'
import { KitCheckoutProvider } from '@0xsequence/kit-checkout'
========
import { kitConfig, wagmiConfig } from '@/config'
>>>>>>>> upstream/next-ssr-improvements:examples/next/src/app/Providers.tsx

const queryClient = new QueryClient()

export interface ProvidersProps {
  initialState: State | undefined
  children: React.ReactNode
}

export const Providers = (props: ProvidersProps) => {
  const { initialState, children } = props

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          <KitWalletProvider>
            <KitCheckoutProvider>{children}</KitCheckoutProvider>
          </KitWalletProvider>
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
