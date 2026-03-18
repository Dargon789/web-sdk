import { proxy } from 'valtio'

interface WalletModalState {
  openWalletModalState: boolean
}

export const walletModalState = proxy<WalletModalState>({
  openWalletModalState: false
})

export const setOpenWalletModal = (open: boolean) => {
  walletModalState.openWalletModalState = open
}
