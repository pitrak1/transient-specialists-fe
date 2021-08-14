import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { equipmentRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import Header from '../src/components/header'

export default function Index() {
  const [equipment, setEquipment] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    }

    const success = (response) => {
      console.log(response.data)
      setEquipment(response.data)
    }
    const failure = (error) => {
      console.log(error)
    }
    equipmentRequest(success, failure)
  }, [])

  const equipmentRows = equipment.map(e => (
    <Tr key={e.serial_number}>
      <Td>{e.serial_number}</Td>
      <Td>{e.oem}</Td>
      <Td>{e.model}</Td>
      <Td>{e.type}</Td>
      <Td>{e.notes}</Td>
      <Td>Details</Td>
    </Tr>
  ))

  return (
    <div>
      <Header title='Equipment' />
      <Table>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>OEM</Th>
            <Th>Model</Th>
            <Th>Type</Th>
            <Th>Notes</Th>
            <Th className='tableLastHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {equipmentRows}
        </Tbody>
      </Table>
    </div>
  )
}