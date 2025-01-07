import type { StoryObj, Meta } from '@storybook/react'
import { Sidebar } from '@baunilha/react/client'
import { Baunilha } from '../components/Baunilha'

export default {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar.Container,
  args: {
    children: (
      <>
        <Sidebar.Content>
          <Sidebar.Header>
            <Baunilha />
          </Sidebar.Header>
          <Sidebar.Menu>
            <Sidebar.Item>Home</Sidebar.Item>
            <Sidebar.Item active>Dashboard</Sidebar.Item>
            <Sidebar.Item>Projects</Sidebar.Item>
          </Sidebar.Menu>
        </Sidebar.Content>
      </>
    ),
  },
} as Meta

export const _Sidebar: StoryObj = {}
