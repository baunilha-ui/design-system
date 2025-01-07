import { BaseTheme } from '../../base'

export interface NavItemButtonSchema {
  icon: {
    foreground: {
      default: string
      active: string
    }
  }
}

export const createLightNavItemButtonSchema = (
  theme: BaseTheme,
): NavItemButtonSchema => ({
  icon: {
    foreground: {
      default: theme.colors.primary.lightGray[500],
      active: theme.colors.primary.lightGray[700],
    },
  },
})

export const createDarkNavItemButtonSchema = (
  theme: BaseTheme,
): NavItemButtonSchema => ({
  icon: {
    foreground: {
      default: theme.colors.primary.darkGray[400],
      active: theme.colors.primary.darkGray[300],
    },
  },
})
