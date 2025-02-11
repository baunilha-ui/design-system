import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, Button, Header, Icon } from '@baunilha/react'
import { Baunilha } from '../components/Baunilha'

export default {
  title: 'Components/Navigation/Header',
  component: Header.Container,
  args: {
    children: (
      <>
        <Header.Content>
          <Baunilha />
          <Header.Menu>
            <Header.Item>Home</Header.Item>
            <Header.Item active>Dashboard</Header.Item>
            <Header.Item>Projects</Header.Item>
          </Header.Menu>
        </Header.Content>
        <Header.Content>
          <Button variant="secondary-color">
            <Icon name="zap" size={3} />
            Upgrade Now
          </Button>
          <Header.Actions>
            <Header.IconButton>
              <Icon name="settings-01" size={3} />
            </Header.IconButton>
            <Header.IconButton>
              <Icon name="bell-01" size={3} />
            </Header.IconButton>
          </Header.Actions>
          <Avatar.Photo size={3} />
        </Header.Content>
      </>
    ),
  },
} as Meta

export const _Header: StoryObj = {}
