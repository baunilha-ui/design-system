import { BaseTheme } from '../../base'
import {
  ButtonLinkSchema,
  createDarkButtonLinkSchema,
  createLightButtonLinkSchema,
} from './create-button-link-schema'
import {
  ButtonSchema,
  createDarkButtonSchema,
  createLightButtonSchema,
} from './create-button-schema'
import {
  createDarkToggleSchema,
  createLightToggleSchema,
  ToggleSchema,
} from './create-toggle-schema'

export interface ComponentSchema {
  button: ButtonSchema
  buttonLink: ButtonLinkSchema
  toggle: ToggleSchema
}

export const createLightComponentsSchema = (
  theme: BaseTheme,
): ComponentSchema => ({
  button: createLightButtonSchema(theme),
  buttonLink: createLightButtonLinkSchema(theme),
  toggle: createLightToggleSchema(theme),
})

export const createDarkComponentsSchema = (
  theme: BaseTheme,
): ComponentSchema => ({
  button: createDarkButtonSchema(theme),
  buttonLink: createDarkButtonLinkSchema(theme),
  toggle: createDarkToggleSchema(theme),
})
