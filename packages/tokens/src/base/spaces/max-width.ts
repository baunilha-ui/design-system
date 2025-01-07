import { MaxWidthKeys } from './types'

export type MaxWidthRaw = Record<MaxWidthKeys, number>

export const maxWidth: MaxWidthRaw = {
  desktop: 1280,
  sidebar: 280,
}
