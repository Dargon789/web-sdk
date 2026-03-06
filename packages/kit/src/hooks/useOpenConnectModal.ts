import { useSnapshot } from 'valtio'

import { connectModalState, setOpenConnectModal } from '../states/ConnectModal'

export const useOpenConnectModal = () => {
  const { openConnectModalState } = useSnapshot(connectModalState)

  return { setOpenConnectModal, openConnectModalState }
}
