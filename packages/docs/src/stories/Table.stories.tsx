import { Meta, StoryFn } from '@storybook/react'
import { Table } from '@baunilha/react/client'

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  // subcomponents: {
  //   Header: Header,
  //   Table.Cell: Table.Cell.Text,
  // },
} as Meta

export const _Table: StoryFn = () => {
  return (
    <Table
      keyExtractor={(item) => item.id}
      data={[
        {
          id: '1',
          name: 'João da Silva',
          email: 'joao@email.com',
          phone: '48999999999',
          lookingFor: 'Apartamento, Casa',
          numberOfContacts: 18,
          createdAt: '01/01/2021',
        },
        {
          id: '2',
          name: 'Maria da Silva',
          email: 'maria@email.com',
          phone: '48999999999',
          lookingFor: 'Apartamento, Casa',
          numberOfContacts: 18,
          createdAt: '01/01/2021',
        },
        {
          id: '3',
          name: 'José da Silva',
          email: 'jose@email.com',
          phone: '48999999999',
          lookingFor: 'Apartamento, Casa',
          numberOfContacts: 18,
          createdAt: '01/01/2021',
        },
        {
          id: '4',
          name: 'Ana da Silva',
          email: 'ana@email.com',
          phone: '48999999999',
          lookingFor: 'Apartamento, Casa',
          numberOfContacts: 18,
          createdAt: '01/01/2021',
        },
      ]}
      renderHeader={() => (
        <Table.Head>
          <Table.Header>Nome</Table.Header>
          <Table.Header>E-mail</Table.Header>
          <Table.Header>Celular</Table.Header>
          <Table.Header>Buscando por</Table.Header>
          <Table.Header>Nº de contatos</Table.Header>
          <Table.Header>Cadastrado em</Table.Header>
          {/* <Table.Header>Ações</Table.Header> */}
        </Table.Head>
      )}
      renderRow={(client) => (
        <Table.Row onClick={() => console.log('Clicked on > ', client.id)}>
          <Table.Cell>
            <Table.Cell.Text>{client.name}</Table.Cell.Text>
            <Table.Cell.Support>{client.email}</Table.Cell.Support>
          </Table.Cell>
          <Table.Cell>
            <Table.Cell.Text>{client.email}</Table.Cell.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Cell.Text>{client.phone}</Table.Cell.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Cell.Text>{client.lookingFor}</Table.Cell.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Cell.Text>{client.numberOfContacts}</Table.Cell.Text>
          </Table.Cell>
          <Table.Cell>
            <Table.Cell.Text>{client.createdAt}</Table.Cell.Text>
          </Table.Cell>
          {/* <Table.Cell.Actions> */}
          {/* <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Deletar</Dropdown.Item> */}
          {/* </Table.Cell.Actions> */}
        </Table.Row>
      )}
    />
  )
}
