import { getNetwork } from '@0xsequence/kit'
import { getPaperNetworkName } from '../utils'
import { SequenceAPIClient } from '@0xsequence/api'

export interface FetchPaperSecretArgs {
  apiClient: SequenceAPIClient
  chainId: number
  email: string
  abi: string
  contractAddress: string
  recipientAddress: string
  receiptTitle: string
  collectionContractAddress?: string
  methodArguments: MethodArguments
  currency: string
  currencyAmount: string
  methodName: string
}

export interface MethodArguments {
  [key: string]: any
}

export const fetchPaperSecret = async ({
  apiClient,
  chainId,
  email,
  contractAddress,
  abi,
  receiptTitle,
  collectionContractAddress,
  methodArguments,
  currency,
  currencyAmount,
  methodName,
  recipientAddress
}: FetchPaperSecretArgs) => {
  const network = getNetwork(chainId)
  const chainName = getPaperNetworkName(network)

  const paramsJson = JSON.stringify({
    title: receiptTitle,
    email,
    limitPerTransaction: 1,
    quantity: 1,
    mintMethod: {
      args: methodArguments,
      payment: {
        currency,
        value: `${currencyAmount} * $QUANTITY`
      },
      name: methodName
    },
    walletAddress: recipientAddress,
    ...(collectionContractAddress
      ? {
          contractArgs: {
            collectionContractAddress
          }
        }
      : {})
  })

  const { secret } = await apiClient.paperSessionSecret2({
    chainName,
    contractAddress,
    abi,
    paramsJson
  })

  return secret
}
