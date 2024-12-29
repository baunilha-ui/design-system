import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@baunilha/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {}
