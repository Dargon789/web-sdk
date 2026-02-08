import { SequenceMetadata } from '@0xsequence/metadata'
import { useProjectAccessKey } from './useProjectAccessKey'
import { useMemo } from 'react'

export const useMetadataClient = () => {
  const projectAccessKey = useProjectAccessKey()

  const metadataClient = useMemo(() => {
    return new SequenceMetadata('https://metadata.sequence.app', projectAccessKey)
  }, [projectAccessKey])

  return metadataClient
}
