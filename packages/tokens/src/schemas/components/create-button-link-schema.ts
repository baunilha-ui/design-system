import { BaseTheme } from '../../base'

interface ColorSchema {
  default: string
  hover: string
}

interface ButtonColorSchema {
  foreground: ColorSchema
  background: ColorSchema
  border?: ColorSchema
}

export interface ButtonLinkSchema {
  gray: {
    foreground: ButtonColorSchema['foreground']
  }
  color: {
    foreground: ButtonColorSchema['foreground']
  }
  error: {
    foreground: ButtonColorSchema['foreground']
  }
}

export const createLightButtonLinkSchema = (
  theme: BaseTheme,
): ButtonLinkSchema => ({
  color: {
    foreground: {
      default: theme.colors.primary.brand[700],
      hover: theme.colors.primary.brand[800],
    },
  },
  gray: {
    foreground: {
      default: theme.colors.primary.lightGray[600],
      hover: theme.colors.primary.lightGray[700],
    },
  },
  error: {
    foreground: {
      default: theme.colors.primary.error[700],
      hover: theme.colors.primary.error[800],
    },
  },
})

export const createDarkButtonLinkSchema = (
  theme: BaseTheme,
): ButtonLinkSchema => ({
  color: {
    foreground: {
      default: theme.colors.primary.darkGray[300],
      hover: theme.colors.primary.darkGray[100],
    },
  },
  gray: {
    foreground: {
      default: theme.colors.primary.darkGray[400],
      hover: theme.colors.primary.darkGray[200],
    },
  },
  error: {
    foreground: {
      default: theme.colors.primary.error[300],
      hover: theme.colors.primary.error[200],
    },
  },
})
