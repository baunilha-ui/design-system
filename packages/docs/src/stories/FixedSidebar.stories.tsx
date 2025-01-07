import type { StoryObj, Meta } from '@storybook/react'
import { Header, Icon } from '@baunilha/react'
import { Sidebar, SidebarProvider, useSidebar } from '@baunilha/react/client'
import { Baunilha } from '../components/Baunilha'
import React from 'react'

export default {
  title: 'Components/Navigation/Fixed Sidebar',
  component: React.Fragment,
  decorators: [
    (Story) => {
      const MenuButton = () => {
        const { isOpen, toggle } = useSidebar()

        return (
          <Header.IconButton onClick={toggle}>
            <Icon name={isOpen ? 'x-close' : 'menu-02'} size={3} />
          </Header.IconButton>
        )
      }

      return (
        <SidebarProvider>
          <Story />
          <Header.Container>
            <Header.Content>
              <Baunilha />
            </Header.Content>
            <Header.Actions>
              <MenuButton />
            </Header.Actions>
          </Header.Container>

          <Sidebar.Container>
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
          </Sidebar.Container>

          <Sidebar.Overlay />
        </SidebarProvider>
      )
    },
  ],
} as Meta

export const FixedSidebar: StoryObj = {}
