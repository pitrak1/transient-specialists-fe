import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { equipmentRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'
import { TableHeader } from '../src/components/tableHeader'

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
      <NavBar title='Equipment' />
      <Table>
        <Thead>
          <Tr>
            <TableHeader sortable={true} sortKey='serialNumber' currentSortKey='serialNumber' currentSortDirection='ASC'>Serial Number</TableHeader>
            <Th>OEM</Th>
            <Th>Model</Th>
            <Th>Type</Th>
            <Th>Notes</Th>
            <Th>Status</Th>
            <Th>Job Number</Th>
            <Th>Company Notes</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th className='tableButtonHeading'></Th>
          </Tr>
        </Thead>
        <Tbody>
          {equipmentRows}
        </Tbody>
      </Table>
    </div>
  )
}