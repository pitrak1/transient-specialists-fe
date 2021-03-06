import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { oemsRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'

export default function Oems() {
  const [oems, setOems] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    } else {
      const success = (response) => {
        console.log(response.data)
        setOems(response.data)
      }
      const failure = (error) => {
        console.log(error)
      }
      oemsRequest(success, failure)
    }
  }, [])

  const oemsRows = oems.map(o => (
    <Tr key={o.id}>
      <Td>{o.name}</Td>
      <Td>Equipment</Td>
      <Td>Models</Td>
      <Td>Edit</Td>
      <Td>Delete</Td>
    </Tr>
  ))

  return (
    <div>
      <NavBar title='OEMs' />
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
            <Th className='tableButtonHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {oemsRows}
        </Tbody>
      </Table>
    </div>
  )
}