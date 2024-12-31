import { CustomTheme } from '@baunilha/tokens'

type Tokens = 'colors' | 'spacing' | 'typography'

type Output =
  | string
  | {
      scss: string
      ts: string
    }

export type BaunilhaConfig = {
  output: Output
  unityType?: 'px' | 'rem'
  defaultFontSize?: number
  include?: Tokens[]
  theme?: CustomTheme
}
