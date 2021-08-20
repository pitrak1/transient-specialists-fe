import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { typesRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'

export default function Types() {
  const [types, setTypes] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    } else {
      const success = (response) => {
        console.log(response.data)
        setTypes(response.data)
      }
      const failure = (error) => {
        console.log(error)
      }
      typesRequest(success, failure)
    }
  }, [])

  const typesRows = types.map(t => (
    <Tr key={t.id}>
      <Td>{t.name}</Td>
      <Td>Equipment</Td>
      <Td>Edit</Td>
      <Td>Delete</Td>
    </Tr>
  ))

  return (
    <div>
      <NavBar title='Types' />
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {typesRows}
        </Tbody>
      </Table>
    </div>
  )
}