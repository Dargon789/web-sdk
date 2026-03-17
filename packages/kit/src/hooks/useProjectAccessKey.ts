import { useKitConfig } from '../hooks/useKitConfig'

export const useProjectAccessKey = () => {
  const { projectAccessKey } = useKitConfig()

  return projectAccessKey
}
