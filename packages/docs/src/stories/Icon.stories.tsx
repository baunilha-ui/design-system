import React from 'react'

import { Icon, IconProps } from '@baunilha/react'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Icon',
  tags: ['autodocs'],
  component: Icon,
  args: {
    size: 5,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
      description: 'Tamanho do ícone',
    },
    name: {
      control: { type: 'select' },
      options: [
        'bar-chart-square-02',
        'users-01',
        'chevron-down',
        'log-out-01',
        'search-lg',
        'check-circle',
        'x-close',
        'bell-01',
        'settings-01',
        'zap',
      ],
      description: 'Nome do ícone',
    },
  },
} as Meta<typeof Icon>

const Template: StoryFn<typeof Icon> = (args: IconProps) => <Icon {...args} />

export const BarChartSquare02 = Template.bind({})
BarChartSquare02.args = {
  name: 'bar-chart-square-02',
}

export const Users01 = Template.bind({})
Users01.args = {
  name: 'users-01',
}

export const ChevronDown = Template.bind({})
ChevronDown.args = {
  name: 'chevron-down',
}

export const LogOut01 = Template.bind({})
LogOut01.args = {
  name: 'log-out-01',
}

export const SearchLg = Template.bind({})
SearchLg.args = {
  name: 'search-lg',
}

export const CheckCircle = Template.bind({})
CheckCircle.args = {
  name: 'check-circle',
}

export const XClose = Template.bind({})
XClose.args = {
  name: 'x-close',
}

export const Bell01 = Template.bind({})
Bell01.args = {
  name: 'bell-01',
}

export const Settings01 = Template.bind({})
Settings01.args = {
  name: 'settings-01',
}

export const Zap = Template.bind({})
Zap.args = {
  name: 'zap',
}
