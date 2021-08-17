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
    } else {
      const success = (response) => {
        console.log(response.data)
        setEquipment(response.data)
      }
      const failure = (error) => {
        console.log(error)
      }
      equipmentRequest(success, failure)
    }
  }, [])

  const equipmentRows = equipment.map(e => (
    <Tr key={e.serial_number}>
      <Td>{e.serial_number}</Td>
      <Td>{e.oem}</Td>
      <Td>{e.model}</Td>
      <Td>{e.type}</Td>
      <Td>{e.notes}</Td>
      <Td>{e.event_status}</Td>
      <Td>{e.event_job_number}</Td>
      <Td>{e.event_company_notes}</Td>
      <Td>{e.event_start_date}</Td>
      <Td>{e.event_end_date}</Td>
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
            <Th>Status</Th>
            <Th>Job Number</Th>
            <Th>Company Notes</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
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