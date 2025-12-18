import { SequenceWaasProvider } from '@0xsequence/kit-connectors'
import { SequenceWaaS } from '@0xsequence/waas'
import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'


interface UseWaasRevalidation {
  openWaasRevalidationModal: boolean,
  setOpenWaasRevalidationModal: React.Dispatch<React.SetStateAction<boolean>>
  onVerify: (code: string) => void
  onVerifyIsLoading: boolean
  setOnVerifyIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function useWaasRevalidation(): UseWaasRevalidation {
  const [openWaasRevalidationModal, setOpenWaasRevalidationModal] = useState(false)
  const [onVerifyIsLoading, setOnVerifyIsLoading] = useState(false)
  const { connector } = useAccount()

  const waasConnector = connector?.type === 'sequence-waas' ? connector : undefined

  const onVerify = async (code: string) => {
    try {
      // @ts-ignore-next-line
      const sequenceWaas: SequenceWaaS = waasConnector.sequenceWaas
      
      if (!sequenceWaas) {
        return
      }

      setOnVerifyIsLoading(true)
      await sequenceWaas.finishValidateSession(code)
    } catch(e) {
      console.log('error...')
      console.error(e)
    }
    setOnVerifyIsLoading(false)
    setOpenWaasRevalidationModal(false)
  }

  useEffect(() => {
    if (!openWaasRevalidationModal) {
      setOnVerifyIsLoading(false)
    }
  }, [openWaasRevalidationModal])

  useEffect(() => {
    async function setup() {
      if (!waasConnector) {
        return
      }

      // @ts-ignore-next-line
      const sequenceWaas: SequenceWaaS = waasConnector.sequenceWaas

      if (!sequenceWaas) {
        return
      }

      // @ts-ignore-next-line
      // waasConnector.triggerSessionValidation = () => {
      //   console.log('validation required')
      //   setOpenWaasRevalidationModal(true)
      // }

      sequenceWaas.onValidationRequired(() => {
        console.log('onValidationRequire')
        setOpenWaasRevalidationModal(true)
      })
    }
    setup()
  }, [waasConnector])

  return ({
    openWaasRevalidationModal,
    setOpenWaasRevalidationModal,
    onVerifyIsLoading,
    setOnVerifyIsLoading,
    onVerify
  }) 
}