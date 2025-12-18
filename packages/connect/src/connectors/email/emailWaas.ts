import { Wallet } from '@0xsequence/kit'
import { CreateConnectorFn } from 'wagmi'

import { sequenceWaasWallet, BaseSequenceWaasConnectorOptions } from '../wagmiConnectors/sequenceWaasConnector'

import { getEmailLogo } from './EmailLogo'


export type EmailWaasOptions = Omit<BaseSequenceWaasConnectorOptions, 'loginType'>

export const emailWaas = (options: EmailWaasOptions): Wallet => ({
  id: 'email-waas',
  logoDark: getEmailLogo({ isDarkMode: true }),
  logoLight: getEmailLogo({ isDarkMode: false }),
  name: 'Email',
  createConnector: () => {
    const connector = sequenceWaasWallet({
      ...options,
      loginType: 'email'
    })
    return connector
  } 
})
