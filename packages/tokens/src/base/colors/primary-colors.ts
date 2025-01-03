import { ColorScale } from './types'

export type PrimaryColors = {
  base: {
    white: string
    black: string
    transparent: string
  }
  brand: ColorScale
  lightGray: ColorScale
  darkGray: ColorScale
  error: ColorScale
  warning: ColorScale
  success: ColorScale
}

export const primaryColors: PrimaryColors = {
  base: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },
  brand: {
    25: '#fcf9f1',
    50: '#fef7df',
    100: '#fdf2cd',
    200: '#ffe58e',
    300: '#f9de83',
    400: '#f0ce61',
    500: '#dfb541',
    600: '#cba337',
    700: '#b89432',
    800: '#9a7b28',
    900: '#635018',
    950: '#3b2f0a',
  },
  lightGray: {
    25: '#FCFCFD',
    50: '#f9fafb',
    100: '#f2f4f7',
    200: '#E4E7EC',
    300: '#D0D5DD',
    400: '#98a2b3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#182230',
    900: '#101828',
    950: '#0C111D',
  },
  darkGray: {
    25: '#FAFAFA',
    50: '#F5F5F6',
    100: '#F0F1F1',
    200: '#ECECED',
    300: '#CECFD2',
    400: '#94969C',
    500: '#85888E',
    600: '#61646C',
    700: '#333741',
    800: '#1F242F',
    900: '#161B26',
    950: '#0C111D',
  },
  error: {
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
    950: '#55160C',
  },
  warning: {
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
    950: '#4E1D09',
  },
  success: {
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#DCFAE6',
    200: '#ABEFC6',
    300: '#75E0A7',
    400: '#47CD89',
    500: '#17B26A',
    600: '#079455',
    700: '#067647',
    800: '#085D3A',
    900: '#074D31',
    950: '#053321',
  },
}
