import { BaseTheme } from '../base'

export type BorderSchema = {
  primary: string
  secondary: string
  tertiary: string
  disabled: string
  disabled_subtle: string
  brand: string
  brandAlt: string
  error: string
  error_subtle: string
}

export const createLightBorderSchema = (theme: BaseTheme): BorderSchema => ({
  primary: theme.colors.primary.lightGray[300],
  secondary: theme.colors.primary.lightGray[200],
  tertiary: theme.colors.primary.lightGray[100],
  disabled: theme.colors.primary.lightGray[300],
  disabled_subtle: theme.colors.primary.lightGray[200],
  brand: theme.colors.primary.brand[500],
  brandAlt: theme.colors.primary.brand[600],
  error: theme.colors.primary.error[500],
  error_subtle: theme.colors.primary.error[300],
})

export const createDarkBorderSchema = (theme: BaseTheme): BorderSchema => ({
  primary: theme.colors.primary.darkGray[700],
  secondary: theme.colors.primary.darkGray[800],
  tertiary: theme.colors.primary.darkGray[800],
  disabled: theme.colors.primary.darkGray[700],
  disabled_subtle: theme.colors.primary.darkGray[800],
  brand: theme.colors.primary.brand[400],
  brandAlt: theme.colors.primary.darkGray[700],
  error: theme.colors.primary.error[400],
  error_subtle: theme.colors.primary.error[400],
})
