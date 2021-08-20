import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { itemGroupsRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'

export default function ItemGroups() {
  const [itemGroups, setItemGroups] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    } else {
      const success = (response) => {
        console.log(response.data)
        setItemGroups(response.data)
      }
      const failure = (error) => {
        console.log(error)
      }
      itemGroupsRequest(success, failure)
    }
  }, [])

  const itemGroupsRows = itemGroups.map(i => (
    <Tr key={i.id}>
      <Td>{i.name}</Td>
      <Td>Details</Td>
    </Tr>
  ))

  return (
    <div>
      <NavBar title='Item Groups' />
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th className='tableButtonHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemGroupsRows}
        </Tbody>
      </Table>
    </div>
  )
}