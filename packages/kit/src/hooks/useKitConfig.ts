import { sequence } from '0xsequence'
import { proxy, useSnapshot, INTERNAL_Snapshot } from 'valtio'

import { KitConfig } from '../types'
import { kitConfigState } from '../states/KitConfig'

export const useKitConfig = (config?: KitConfig): INTERNAL_Snapshot<KitConfig> => {
  const { kitConfig } = useSnapshot(kitConfigState)

  if (!kitConfig) {
    kitConfigState.kitConfig = config
  }

  const returnedConfig = kitConfig || config

  if (!returnedConfig) {
    throw new Error('No KitConfig passed to kit provider')
  }

  return returnedConfig
}
