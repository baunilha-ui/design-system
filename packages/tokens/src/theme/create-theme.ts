import { BaseTheme, baseTheme } from '../base'
import {
  createDarkTheme,
  createLightTheme,
  ThemeSchema,
} from '../schemas/create-theme-schema'

import { merge } from '../utils/merge'

import { mapRawToPixel } from '../mappers/map-raw-to-pixel'
import { mapRawToRem } from '../mappers/map-raw-to-rem'
import { Theme } from './types'
import { DeepPartial } from '../types/utils'
import { theme } from './theme'

export type CustomTheme = DeepPartial<BaseTheme> & {
  colors?: DeepPartial<BaseTheme['colors']> & {
    light?: DeepPartial<ThemeSchema>
    dark?: DeepPartial<ThemeSchema>
  }
}

export type Options = {
  unityType: 'rem' | 'px'
}

const unityTypeMapper = {
  px: mapRawToPixel,
  rem: mapRawToRem,
}

type CreateThemeParams = {
  customTheme?: CustomTheme
  options?: Options
}

export const createTheme = (params?: CreateThemeParams): Theme => {
  const { customTheme, options } = params || {}

  const mergedTheme = merge(baseTheme, customTheme || {})

  const customLightTheme = customTheme?.colors?.light || {}
  const customDarkTheme = customTheme?.colors?.dark || {}

  const lightColors = merge(createLightTheme(mergedTheme), customLightTheme)
  const darkColors = merge(createDarkTheme(mergedTheme), customDarkTheme)

  const unityTypeMapperFn = unityTypeMapper[options?.unityType || 'px']

  const newTheme: Theme = {
    ...mergedTheme,
    raw: {
      space: mergedTheme.space,
      radii: mergedTheme.radii,
      fontSize: mergedTheme.fontSize,
      lineHeight: mergedTheme.lineHeight,
    },
    lineHeight: unityTypeMapperFn(mergedTheme.lineHeight),
    radii: unityTypeMapperFn(mergedTheme.radii),
    fontSize: unityTypeMapperFn(mergedTheme.fontSize),
    space: unityTypeMapperFn(mergedTheme.space),
    colors: {
      ...mergedTheme.colors,
      light: lightColors,
      dark: darkColors,
    },
  }

  theme.set(newTheme)

  return newTheme
}
