import { BaseTheme } from '../../base'
import {
  AvatarSchema,
  createDarkAvatarSchema,
  createLightAvatarSchema,
} from './create-avatar-schema'
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
  createDarkNavItemButtonSchema,
  createLightNavItemButtonSchema,
  NavItemButtonSchema,
} from './create-nav-item-button-schema'
import {
  createDarkToggleSchema,
  createLightToggleSchema,
  ToggleSchema,
} from './create-toggle-schema'

export interface ComponentSchema {
  button: ButtonSchema
  buttonLink: ButtonLinkSchema
  toggle: ToggleSchema
  navItemButton: NavItemButtonSchema
  avatar: AvatarSchema
}

export const createLightComponentsSchema = (
  theme: BaseTheme,
): ComponentSchema => ({
  button: createLightButtonSchema(theme),
  buttonLink: createLightButtonLinkSchema(theme),
  toggle: createLightToggleSchema(theme),
  navItemButton: createLightNavItemButtonSchema(theme),
  avatar: createLightAvatarSchema(theme),
})

export const createDarkComponentsSchema = (
  theme: BaseTheme,
): ComponentSchema => ({
  button: createDarkButtonSchema(theme),
  buttonLink: createDarkButtonLinkSchema(theme),
  toggle: createDarkToggleSchema(theme),
  navItemButton: createDarkNavItemButtonSchema(theme),
  avatar: createDarkAvatarSchema(theme),
})
