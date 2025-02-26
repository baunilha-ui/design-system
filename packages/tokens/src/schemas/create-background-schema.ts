import { BaseTheme } from '../base'

export type BackgroundSchema = {
  primary: string
  primaryHover: string
  primaryActive: string
  primary_alt: string
  primarySolid: string
  secondary: string
  secondary_alt: string
  secondary_subtle: string
  secondarySolid: string
  tertiary: string
  quaternary: string
  active: string
  disabled: string
  disabled_subtle: string
  overlay: string
  brandPrimary: string
  brandPrimary_alt: string
  brandSecondary: string
  brandSolid: string
  brandSection: string
  brandSection_subtle: string
  errorPrimary: string
  errorSecondary: string
  errorSolid: string
  warningPrimary: string
  warningSecondary: string
  warningSolid: string
  successPrimary: string
  successSecondary: string
  successSolid: string
}

export const createLightBackgroundSchema = (
  theme: BaseTheme,
): BackgroundSchema => ({
  primary: theme.colors.primary.base.white,
  primaryHover: theme.colors.primary.lightGray[50],
  primaryActive: theme.colors.primary.lightGray[100],
  primary_alt: theme.colors.primary.base.white,
  primarySolid: theme.colors.primary.lightGray[950],
  secondary: theme.colors.primary.lightGray[50],
  secondary_alt: theme.colors.primary.lightGray[50],
  secondary_subtle: theme.colors.primary.lightGray[25],
  secondarySolid: theme.colors.primary.lightGray[50],
  tertiary: theme.colors.primary.lightGray[100],
  quaternary: theme.colors.primary.lightGray[200],
  active: theme.colors.primary.lightGray[50],
  disabled: theme.colors.primary.lightGray[100],
  disabled_subtle: theme.colors.primary.lightGray[100],
  overlay: theme.colors.primary.lightGray[950],
  brandPrimary: theme.colors.primary.brand[50],
  brandPrimary_alt: theme.colors.primary.brand[50],
  brandSecondary: theme.colors.primary.brand[100],
  brandSolid: theme.colors.primary.brand[600],
  brandSection: theme.colors.primary.brand[800],
  brandSection_subtle: theme.colors.primary.brand[700],
  errorPrimary: theme.colors.primary.error[50],
  errorSecondary: theme.colors.primary.error[100],
  errorSolid: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.warning[50],
  warningSecondary: theme.colors.primary.warning[100],
  warningSolid: theme.colors.primary.warning[600],
  successPrimary: theme.colors.primary.success[50],
  successSecondary: theme.colors.primary.success[100],
  successSolid: theme.colors.primary.success[600],
})

export const createDarkBackgroundSchema = (
  theme: BaseTheme,
): BackgroundSchema => ({
  primary: theme.colors.primary.base.black,
  primaryHover: theme.colors.primary.darkGray[800],
  primaryActive: theme.colors.primary.darkGray[800],
  primary_alt: theme.colors.primary.darkGray[900],
  primarySolid: theme.colors.primary.darkGray[900],
  secondary: theme.colors.primary.darkGray[900],
  secondary_alt: theme.colors.primary.base.black,
  secondary_subtle: theme.colors.primary.darkGray[900],
  secondarySolid: theme.colors.primary.darkGray[600],
  tertiary: theme.colors.primary.darkGray[800],
  quaternary: theme.colors.primary.darkGray[700],
  active: theme.colors.primary.darkGray[800],
  disabled: theme.colors.primary.darkGray[800],
  disabled_subtle: theme.colors.primary.darkGray[900],
  overlay: theme.colors.primary.darkGray[800],
  brandPrimary: theme.colors.primary.brand[500],
  brandPrimary_alt: theme.colors.primary.darkGray[800],
  brandSecondary: theme.colors.primary.brand[600],
  brandSolid: theme.colors.primary.brand[600],
  brandSection: theme.colors.primary.darkGray[800],
  brandSection_subtle: theme.colors.primary.base.black,
  errorPrimary: theme.colors.primary.error[500],
  errorSecondary: theme.colors.primary.error[600],
  errorSolid: theme.colors.primary.error[600],
  warningPrimary: theme.colors.primary.warning[500],
  warningSecondary: theme.colors.primary.warning[600],
  warningSolid: theme.colors.primary.warning[600],
  successPrimary: theme.colors.primary.success[500],
  successSecondary: theme.colors.primary.success[600],
  successSolid: theme.colors.primary.success[600],
})
