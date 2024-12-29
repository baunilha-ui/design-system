import { PrimaryColors, primaryColors } from './colors/primary-colors'
import { SecondaryColors, secondaryColors } from './colors/secondary-colors'
import { fontSize, FontSizeRaw } from './spaces/font-size'
import { lineHeight, LineHeightRaw } from './spaces/line-height'
import { radii, RadiiRaw } from './spaces/radii'
import { space, SpaceRaw } from './spaces/space'

export type BaseColors = {
  primary: PrimaryColors
  secondary: SecondaryColors
}

export type BaseTheme = {
  space: SpaceRaw
  radii: RadiiRaw
  fontSize: FontSizeRaw
  lineHeight: LineHeightRaw
  colors: BaseColors
}

export const baseTheme: BaseTheme = {
  space,
  radii,
  fontSize,
  lineHeight,
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
  },
}
