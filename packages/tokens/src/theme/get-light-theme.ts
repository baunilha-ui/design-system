import { Theme, ThemeMode } from './types'

export const getLightTheme = (theme: Theme): ThemeMode => {
  const { dark: _dark, light, ...baseColors } = theme.colors

  return {
    ...theme,
    colors: {
      ...baseColors,
      ...light,
    },
  }
}
