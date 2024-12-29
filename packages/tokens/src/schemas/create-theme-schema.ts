import { BaseTheme } from '../base'

import {
  ComponentSchema,
  createDarkComponentsSchema,
  createLightComponentsSchema,
} from './components/create-components-schema'
import {
  BackgroundSchema,
  createDarkBackgroundSchema,
  createLightBackgroundSchema,
} from './create-background-schema'
import {
  BorderSchema,
  createDarkBorderSchema,
  createLightBorderSchema,
} from './create-border-schema'
import {
  createDarkForegroundSchema,
  createLightForegroundSchema,
  ForegroundSchema,
} from './create-foreground-scheme'
import {
  createDarkTextSchema,
  createLightTextSchema,
  TextSchema,
} from './create-text-schema'
import {
  createDarkUtilitySchema,
  createLightUtilitySchema,
  UtilitySchema,
} from './create-utility-schema'

export type ThemeSchema = {
  utility: UtilitySchema
  text: TextSchema
  components: ComponentSchema
  border: BorderSchema
  background: BackgroundSchema
  foreground: ForegroundSchema
}

export const createDarkTheme = (theme: BaseTheme): ThemeSchema => {
  return {
    utility: createDarkUtilitySchema(theme),
    text: createDarkTextSchema(theme),
    components: createDarkComponentsSchema(theme),
    background: createDarkBackgroundSchema(theme),
    border: createDarkBorderSchema(theme),
    foreground: createDarkForegroundSchema(theme),
  }
}

export const createLightTheme = (theme: BaseTheme): ThemeSchema => {
  return {
    utility: createLightUtilitySchema(theme),
    text: createLightTextSchema(theme),
    components: createLightComponentsSchema(theme),
    background: createLightBackgroundSchema(theme),
    border: createLightBorderSchema(theme),
    foreground: createLightForegroundSchema(theme),
  }
}
