import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { modelsRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'

export default function Models() {
  const [models, setModels] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    } else {
      const success = (response) => {
        console.log(response.data)
        setModels(response.data)
      }
      const failure = (error) => {
        console.log(error)
      }
      modelsRequest(success, failure)
    }
  }, [])

  const modelsRows = models.map(m => (
    <Tr key={m.id}>
      <Td>{m.name}</Td>
      <Td>{m.oem_name}</Td>
      <Td>Equipment</Td>
      <Td>Edit</Td>
      <Td>Delete</Td>
    </Tr>
  ))

  return (
    <div>
      <NavBar title='Models' />
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>OEM</Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {modelsRows}
        </Tbody>
      </Table>
    </div>
  )
}