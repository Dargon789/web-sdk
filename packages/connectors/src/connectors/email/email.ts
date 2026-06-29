import { getEmailLogo } from './EmailLogo'

import { sequenceWallet, BaseSequenceConnectorOptions } from '../wagmiConnectors'
import { Wallet } from '@0xsequence/kit'

export const EMAIL_CONNECTOR_LOCAL_STORAGE_KEY = '@sequence.kit.connector.email'

export interface EmailOptions extends BaseSequenceConnectorOptions {}

export const email = (options: EmailOptions): Wallet => ({
  id: 'email',
  isSequenceBased: true,
  logoDark: getEmailLogo({ isDarkMode: true }),
  logoLight: getEmailLogo({ isDarkMode: false }),
  // iconBackground: '#fff',
  name: 'Email',
  createConnector: projectAccessKey => {
    //const email = localStorage.getItem(EMAIL_CONNECTOR_LOCAL_STORAGE_KEY)

    const connector = sequenceWallet({
      ...options,
      connect: {
        projectAccessKey,
        ...options?.connect,
        settings: {
          ...options?.connect?.settings,
          signInOptions: ['email']
          // signInWithEmail: email || ''
        }
      }
    })

    return connector
  }
})
