import { useOpenConnectModal, useWallets } from '@0xsequence/connect'
<<<<<<< HEAD
import { Button, Image } from '@0xsequence/design-system'
=======
import { Button, Image, useTheme } from '@0xsequence/design-system'
>>>>>>> upstream/master
import { Footer } from 'example-shared-components'
import { Link } from 'react-router-dom'

import { Connected } from './Connected'

export const Homepage = () => {
  const { wallets } = useWallets()
  const { setOpenConnectModal } = useOpenConnectModal()
<<<<<<< HEAD
=======
  const { theme } = useTheme()
>>>>>>> upstream/master

  const onClickConnect = () => {
    setOpenConnectModal(true)
  }

  return (
    <main>
      {wallets.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-5 h-screen">
          <div className="flex flex-row items-center justify-center gap-3">
<<<<<<< HEAD
            <Image className="w-[300px]" src="images/sequence-websdk-dark.svg" />
          </div>

          <div className="flex gap-2 flex-row items-center">
            <Button onClick={onClickConnect} variant="feature" label="Connect" />
            <Link to="/inline">
              <Button variant="primary" label="Inline Demo" />
=======
            <Image
              className="w-[300px]"
              src={theme === 'dark' ? 'images/sequence-websdk-dark.svg' : 'images/sequence-websdk-light.svg'}
            />
          </div>

          <div className="flex gap-2 flex-row items-center">
            <Button onClick={onClickConnect} variant="primary">
              Connect
            </Button>
            <Link to="/inline">
              <Button variant="primary">Inline Demo</Button>
>>>>>>> upstream/master
            </Link>
          </div>
        </div>
      ) : (
        <Connected />
      )}
      <Footer />
    </main>
  )
}
