import { proxy } from 'valtio'

interface ConnectModalState {
  openConnectModalState: boolean
}

export const connectModalState = proxy<ConnectModalState>({
  openConnectModalState: false
})

export const setOpenConnectModal = (open: boolean) => {
  connectModalState.openConnectModalState = open
}
