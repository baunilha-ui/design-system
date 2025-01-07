import { BaseColors } from '../base'
import { FontSizeRaw } from '../base/spaces/font-size'
import { LineHeightRaw } from '../base/spaces/line-height'
import { MaxWidthRaw } from '../base/spaces/max-width'
import { RadiiRaw } from '../base/spaces/radii'
import { SpaceRaw } from '../base/spaces/space'
import {
  FontSizeKeys,
  LineHeightKeys,
  RadiiKeys,
  SpaceKeys,
  MaxWidthKeys,
} from '../base/spaces/types'
import { ThemeSchema } from '../schemas/create-theme-schema'

type UnityTypeRecord<Key extends string | number> = Record<Key, string>

export type Theme = {
  colors: BaseColors & {
    light: ThemeSchema
    dark: ThemeSchema
  }
  raw: {
    space: SpaceRaw
    radii: RadiiRaw
    fontSize: FontSizeRaw
    lineHeight: LineHeightRaw
    maxWidth: MaxWidthRaw
  }
  space: UnityTypeRecord<SpaceKeys>
  radii: UnityTypeRecord<RadiiKeys>
  fontSize: UnityTypeRecord<FontSizeKeys>
  lineHeight: UnityTypeRecord<LineHeightKeys>
  maxWidth: UnityTypeRecord<MaxWidthKeys>
}

export type ThemeMode = Omit<Theme, 'colors'> & {
  colors: BaseColors & ThemeSchema
}
