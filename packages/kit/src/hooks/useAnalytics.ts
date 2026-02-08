import { sequence } from '0xsequence'
import { proxy, useSnapshot, INTERNAL_Snapshot } from 'valtio'

import { analyticsState, setAnalytics } from '../states/Analytics'

interface UseAnalytics {
  analytics: INTERNAL_Snapshot<sequence.SequenceClient['analytics']>,
  setAnalytics: (analytics: sequence.SequenceClient['analytics']) => void
}

export const useAnalytics = (): UseAnalytics => {
  const { analytics } = useSnapshot(analyticsState)

  return { analytics, setAnalytics }
}
