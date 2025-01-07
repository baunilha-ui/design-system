import { BaseTheme } from '../base'

export type TextSchema = {
  primary: string
  secondary: string
  tertiary: string
  quaternary: string
  white: string
  disabled: string
  placeholder: string
  placeholder_subtle: string
  brandPrimary: string
  brandSecondary: string
  brandTertiary: string
  brandTertiary_alt: string
  errorPrimary: string
  warningPrimary: string
  successPrimary: string
}

export const createLightTextSchema = (theme: BaseTheme): TextSchema => ({
  primary: theme.colors.primary.lightGray[900],
  secondary: theme.colors.primary.lightGray[700],
  tertiary: theme.colors.primary.lightGray[600],
  quaternary: theme.colors.primary.lightGray[500],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.lightGray[500],
  placeholder: theme.colors.primary.lightGray[500],
  placeholder_subtle: theme.colors.primary.lightGray[300],
  brandPrimary: theme.colors.primary.brand[900],
  brandSecondary: theme.colors.primary.brand[700],
  brandTertiary: theme.colors.primary.brand[600],
  brandTertiary_alt: theme.colors.primary.brand[600],
  errorPrimary: theme.colors.primary.error[600],
  successPrimary: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.error[600],
})

export const createDarkTextSchema = (theme: BaseTheme): TextSchema => ({
  primary: theme.colors.primary.darkGray[50],
  secondary: theme.colors.primary.darkGray[300],
  tertiary: theme.colors.primary.darkGray[400],
  quaternary: theme.colors.primary.darkGray[400],
  white: theme.colors.primary.base.white,
  disabled: theme.colors.primary.darkGray[500],
  placeholder: theme.colors.primary.darkGray[400],
  placeholder_subtle: theme.colors.primary.darkGray[700],
  brandPrimary: theme.colors.primary.darkGray[50],
  brandSecondary: theme.colors.primary.darkGray[300],
  brandTertiary: theme.colors.primary.darkGray[400],
  brandTertiary_alt: theme.colors.primary.darkGray[50],
  errorPrimary: theme.colors.primary.error[400],
  successPrimary: theme.colors.primary.error[400],
  warningPrimary: theme.colors.primary.error[400],
})
