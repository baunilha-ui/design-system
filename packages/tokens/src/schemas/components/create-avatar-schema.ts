import { BaseTheme } from '../../base'

export interface AvatarSchema {
  background: {
    default: string
  }
  contrastBorder: string
}

export const createLightAvatarSchema = (theme: BaseTheme): AvatarSchema => ({
  background: {
    default: theme.colors.primary.lightGray[100],
  },
  contrastBorder: 'rgba(0, 0, 0, 0.08)',
})

export const createDarkAvatarSchema = (theme: BaseTheme): AvatarSchema => ({
  background: {
    default: theme.colors.primary.darkGray[800],
  },
  contrastBorder: 'rgba(255, 255, 255, 0.12)',
})
