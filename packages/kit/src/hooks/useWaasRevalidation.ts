import { SequenceWaaS } from '@0xsequence/waas'
import { commons } from '@0xsequence/core'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { Deferred } from '../utils/deferred'
import { useAccount } from 'wagmi'
import type { SequenceWaasConnector } from '@0xsequence/kit-connectors'


export function useWaasRevalidation(
  // waasConnector?: any
) {
  const { connector } = useAccount()

  const waasConnector = connector?.type === 'sequence-waas' ? connector : undefined


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

      sequenceWaas.onValidationRequired(() => {
        console.log('TODO: requires validation!')
      })
    }
    setup()
  }, [waasConnector])

  return 
}
