import { injected } from 'wagmi/connectors'

import { MetamaskLogo } from './MetamaskLogo'
import { Wallet } from '@0xsequence/kit'

export const metamask = (): Wallet => ({
  id: 'metamask',
  logoDark: MetamaskLogo,
  logoLight: MetamaskLogo,
  // iconBackground: '#fff',
  name: 'Metamask',
  createConnector: () => {
    const connector = injected({ target: 'metaMask' })
    return connector
  }
})
