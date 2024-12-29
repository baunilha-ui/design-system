import { RadiiKeys } from './types'

export type RadiiRaw = Record<RadiiKeys, number>

export const radii: RadiiRaw = {
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  99: 9999,
}
