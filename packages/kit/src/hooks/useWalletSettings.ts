import { useSnapshot } from 'valtio'
import { setDisplayedAssets, walletSettingsState } from '../states/WalletSettings'

export const useWalletSettings = () => {
  const { displayedAssets } = useSnapshot(walletSettingsState)

  return {
    displayedAssets,
    setDisplayedAssets
  }
}
