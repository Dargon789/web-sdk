import { proxy } from "valtio";

import { KitConfig } from '../types'

export interface KitConfigState {
  kitConfig: KitConfig | undefined
}

export const kitConfigState = proxy<KitConfigState>({
  kitConfig: undefined
})

export const setKitConfig = (kitConfig: KitConfig) => {
  kitConfigState.kitConfig = kitConfig
}
