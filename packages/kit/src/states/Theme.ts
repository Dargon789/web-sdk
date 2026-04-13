import { proxy } from "valtio";

import { ModalPosition, Theme } from '../index'

export interface ThemeState {
  theme: Theme | undefined
  position: ModalPosition | undefined
}

export const themeState = proxy<ThemeState>({
  theme: undefined,
  position: undefined
})

export const setTheme = (theme: Theme) => {
  themeState.theme = theme
}

export const setPosition = (position: ModalPosition) => {
  themeState.position = position
}
