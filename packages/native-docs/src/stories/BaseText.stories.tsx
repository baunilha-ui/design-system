import React from 'react'
import {
  CustomTextWeight,
  TextProps,
} from '../../../native/src/components/BaseText/types'
import { Meta, StoryFn } from '@storybook/react'
import { BaseText } from '../../../native/src/components/BaseText'
import { TextScheme } from '../../../native/src/theme/schemes/createTextScheme'
import { FontSizeKeys } from '../../../native/src/constants/theme'

const COLOR_OPTIONS: Array<keyof TextScheme> = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'white',
  'disabled',
  'placeholder',
  'placeholder_subtle',
  'brandPrimary',
  'brandSecondary',
  'brandTertiary',
  'brandTertiary_alt',
  'errorPrimary',
  'warningPrimary',
  'successPrimary',
]

const WEIGHT_OPTIONS: CustomTextWeight[] = [400, 500, 600, 700]
const SIZE_OPTIONS: FontSizeKeys[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
]

export default {
  title: 'Components/Text',
  component: BaseText,
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: 'select',
      options: COLOR_OPTIONS,
      description: 'Define a cor do texto',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: SIZE_OPTIONS,
      description: 'Define o tamanho do texto',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    weight: {
      control: 'select',
      options: WEIGHT_OPTIONS,
      description: 'Defines o font weight do texto',
      table: {
        defaultValue: { summary: '400' },
      },
    },
    children: {
      control: 'text',
      description: 'Conteúdo',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta<TextProps>

const Template: StoryFn<TextProps> = (args) => <BaseText {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Texto de exemplo',
  color: 'default',
  size: 'md',
  weight: 500,
}
