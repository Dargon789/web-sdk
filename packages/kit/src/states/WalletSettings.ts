import { proxy } from "valtio";

import { DisplayedAsset } from '../types'

export interface WalletSettingState {
  displayedAssets: DisplayedAsset[]
}

export const walletSettingsState = proxy<WalletSettingState>({
  displayedAssets: []
})

export const setDisplayedAssets = (displayedAssets: DisplayedAsset[]) => {
  walletSettingsState.displayedAssets = displayedAssets
}
