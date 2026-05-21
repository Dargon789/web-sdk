import { sequence } from '0xsequence'
import { proxy } from "valtio";

export interface AnalyticsState {
  analytics: sequence.SequenceClient['analytics']
}

export const analyticsState = proxy<AnalyticsState>({
  analytics: undefined
})

export const setAnalytics = (analytics: sequence.SequenceClient['analytics']) => {
  analyticsState.analytics = analytics
}
