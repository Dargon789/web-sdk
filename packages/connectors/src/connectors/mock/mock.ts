import { mock as mockBase, MockParameters } from 'wagmi/connectors'

import { SequenceLogo } from '../sequence/SequenceLogo'
import { Wallet } from '@0xsequence/kit'

export const mock = (options: MockParameters): Wallet => ({
  id: 'mock',
  isSequenceBased: true,
  logoDark: SequenceLogo,
  logoLight: SequenceLogo,
  // iconBackground: '#777',
  name: 'Mock',
  createConnector: () => {
    const connector = mockBase(options)
    return connector
  }
})
