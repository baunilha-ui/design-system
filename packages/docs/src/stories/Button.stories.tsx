import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@baunilha/react'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: { autodocs: true },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'secondary',
        'secondary-color',
        'tertiary',
        'tertiary-color',
      ],
      description: 'Define o estilo do botão.',
    },
    disabled: {
      control: {
        type: 'radio',
      },
      options: [true, false],
    },
    size: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5],
      description: 'Tamanho do botão.',
    },
    onClick: {
      action: 'onPress',
      description: 'Função chamada ao clicar no botão.',
    },
    children: {
      control: {
        type: 'text',
      },
      description: 'Texto ou elementos filhos do botão.',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const SecondaryColor: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary-color',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const TertiaryColor: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary-color',
  },
}
