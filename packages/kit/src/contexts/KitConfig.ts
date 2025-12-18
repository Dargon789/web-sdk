import { createGenericContext } from '../utils'
import { KitConfig } from '../components/KitProvider'

export const [useKitConfig, KitConfigContextProvider] = createGenericContext<KitConfig>()
