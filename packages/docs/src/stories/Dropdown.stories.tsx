import { Meta, StoryFn } from '@storybook/react'
import { Dropdown } from '@baunilha/react/client'
import { Button } from '@baunilha/react'

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
} as Meta

export const _Dropdown: StoryFn = () => {
  return (
    <>
      <Dropdown.Container>
        <Dropdown.Trigger>
          <Button variant="secondary">Teste Dropdown</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Editar</Dropdown.Item>
          <Dropdown.Item>Deletar</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Container>
    </>
  )
}
