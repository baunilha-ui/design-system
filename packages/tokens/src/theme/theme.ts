import { Theme } from './types'

export class ThemeClass {
  private theme: Theme = {} as Theme

  set(theme: Theme) {
    this.theme = theme
  }

  get raw() {
    if (this.theme.raw === undefined) this.dispatchError()

    return this.theme.raw
  }

  get space() {
    if (this.theme.space === undefined) this.dispatchError()

    return this.theme.space
  }

  get radii() {
    if (this.theme.radii === undefined) this.dispatchError()

    return this.theme.radii
  }

  get fontSize() {
    if (this.theme.fontSize === undefined) this.dispatchError()

    return this.theme.fontSize
  }

  get lineHeight() {
    if (this.theme.lineHeight === undefined) this.dispatchError()

    return this.theme.lineHeight
  }

  get colors() {
    if (this.theme.colors === undefined) this.dispatchError()

    return this.theme.colors
  }

  private dispatchError() {
    throw new Error(
      'You need to create a theme using `createTheme` before accessing it',
    )
  }
}

export const theme = new ThemeClass()
