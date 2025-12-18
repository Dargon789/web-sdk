import { useConfig } from '@0xsequence/hooks'
import { SequenceWaaS } from '@0xsequence/waas'

import { useSocialLink } from './useSocialLink.js'

export const useSequenceWaaS = () => {
  const { projectAccessKey } = useConfig()
  const { waasConfigKey } = useSocialLink()

  return new SequenceWaaS({
      projectAccessKey: projectAccessKey,
      waasConfigKey: waasConfigKey
    });

}
