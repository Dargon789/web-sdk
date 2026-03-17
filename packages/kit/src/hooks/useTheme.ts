import { useSnapshot } from 'valtio'
import { themeState, setTheme, setPosition} from '../states/Theme'
import { ModalPosition, Theme } from '../index'

interface UseTheme {
  theme: Theme
  position: ModalPosition
  setTheme: (theme: Theme) => void
  setPosition: (position: ModalPosition) => void
}

export const useTheme = (initialTheme?: Theme, initialPosition?: ModalPosition): UseTheme => {
  const { theme, position } = useSnapshot(themeState)

  if (!theme) {
    themeState.theme = initialTheme
  }

  if (!position) {
    themeState.position = initialPosition
  }

  const returnedTheme = theme || initialTheme
  const returnedPosition = position || initialPosition

  if (!returnedTheme) {
    throw new Error('Failed to pass theme to kitProvider')
  }

  if (!returnedPosition) {
    throw new Error('Failed to pass modal positiojn to kitProvider')
  }

  return {
    setTheme,
    theme: returnedTheme,
    position: returnedPosition,
    setPosition
  }
}
