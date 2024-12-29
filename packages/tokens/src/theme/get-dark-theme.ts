import { Theme, ThemeMode } from './types'

export const getDarkTheme = (theme: Theme): ThemeMode => {
  const { light: _light, dark, ...baseColors } = theme.colors

  return {
    ...theme,
    colors: {
      ...baseColors,
      ...dark,
    },
  }
}
