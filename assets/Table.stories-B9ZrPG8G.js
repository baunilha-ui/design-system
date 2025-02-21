import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{T as e}from"./client-CHkvUYXl.js";import"./chunk-OSXW7R6H-47ENc7sE.js";import"./index-DmM0KDA7.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";const C={title:"Components/Table",component:e,tags:["autodocs"]},n=()=>a.jsx(e,{keyExtractor:l=>l.id,data:[{id:"1",name:"João da Silva",email:"joao@email.com",phone:"48999999999",lookingFor:"Apartamento, Casa",numberOfContacts:18,createdAt:"01/01/2021"},{id:"2",name:"Maria da Silva",email:"maria@email.com",phone:"48999999999",lookingFor:"Apartamento, Casa",numberOfContacts:18,createdAt:"01/01/2021"},{id:"3",name:"José da Silva",email:"jose@email.com",phone:"48999999999",lookingFor:"Apartamento, Casa",numberOfContacts:18,createdAt:"01/01/2021"},{id:"4",name:"Ana da Silva",email:"ana@email.com",phone:"48999999999",lookingFor:"Apartamento, Casa",numberOfContacts:18,createdAt:"01/01/2021"}],renderHeader:()=>a.jsxs(e.Head,{children:[a.jsx(e.Header,{children:"Nome"}),a.jsx(e.Header,{children:"E-mail"}),a.jsx(e.Header,{children:"Celular"}),a.jsx(e.Header,{children:"Buscando por"}),a.jsx(e.Header,{children:"Nº de contatos"}),a.jsx(e.Header,{children:"Cadastrado em"})]}),renderRow:l=>a.jsxs(e.Row,{onClick:()=>console.log("Clicked on > ",l.id),children:[a.jsxs(e.Cell,{children:[a.jsx(e.Cell.Text,{children:l.name}),a.jsx(e.Cell.Support,{children:l.email})]}),a.jsx(e.Cell,{children:a.jsx(e.Cell.Text,{children:l.email})}),a.jsx(e.Cell,{children:a.jsx(e.Cell.Text,{children:l.phone})}),a.jsx(e.Cell,{children:a.jsx(e.Cell.Text,{children:l.lookingFor})}),a.jsx(e.Cell,{children:a.jsx(e.Cell.Text,{children:l.numberOfContacts})}),a.jsx(e.Cell,{children:a.jsx(e.Cell.Text,{children:l.createdAt})})]})});n.__docgenInfo={description:"",methods:[],displayName:"_Table"};var o,r,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <Table keyExtractor={item => item.id} data={[{
    id: '1',
    name: 'João da Silva',
    email: 'joao@email.com',
    phone: '48999999999',
    lookingFor: 'Apartamento, Casa',
    numberOfContacts: 18,
    createdAt: '01/01/2021'
  }, {
    id: '2',
    name: 'Maria da Silva',
    email: 'maria@email.com',
    phone: '48999999999',
    lookingFor: 'Apartamento, Casa',
    numberOfContacts: 18,
    createdAt: '01/01/2021'
  }, {
    id: '3',
    name: 'José da Silva',
    email: 'jose@email.com',
    phone: '48999999999',
    lookingFor: 'Apartamento, Casa',
    numberOfContacts: 18,
    createdAt: '01/01/2021'
  }, {
    id: '4',
    name: 'Ana da Silva',
    email: 'ana@email.com',
    phone: '48999999999',
    lookingFor: 'Apartamento, Casa',
    numberOfContacts: 18,
    createdAt: '01/01/2021'
  }]} renderHeader={() => <Table.Head>
          <Table.Header>Nome</Table.Header>
          <Table.Header>E-mail</Table.Header>
          <Table.Header>Celular</Table.Header>
          <Table.Header>Buscando por</Table.Header>
          <Table.Header>Nº de contatos</Table.Header>
          <Table.Header>Cadastrado em</Table.Header>
          {/* <Table.Header>Ações</Table.Header> */}
        </Table.Head>} renderRow={client => <Table.Row onClick={() => console.log('Clicked on > ', client.id)}>
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
        </Table.Row>} />;
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const b=["_Table"];export{n as _Table,b as __namedExportsOrder,C as default};
