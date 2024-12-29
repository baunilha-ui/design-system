import { BaseTheme } from '../../base'

export interface ToggleSchema {
  // toggle: {
  track: {
    background: {
      active: string
      inactive: string
      hover: string
    }
  }
  // }
}

export const createLightToggleSchema = (theme: BaseTheme): ToggleSchema => ({
  // toggle: {
  track: {
    background: {
      active: theme.colors.primary.brand[600],
      inactive: theme.colors.primary.lightGray[100],
      hover: theme.colors.primary.brand[700],
    },
  },
  // },
})

export const createDarkToggleSchema = (theme: BaseTheme): ToggleSchema => ({
  // toggle: {
  track: {
    background: {
      active: theme.colors.primary.brand[600],
      inactive: theme.colors.primary.darkGray[800],
      hover: theme.colors.primary.brand[700],
    },
  },
  // },
})
