import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { equipmentRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'
import { FullTable, ColumnTypes } from '../src/components/table'

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


  const headerData = [
    { key: 'serialNumber', value: 'Serial Number', type: ColumnTypes.Value },
    { key: 'oem', value: 'OEM', type: ColumnTypes.Value },
    { key: 'model', value: 'Model', type: ColumnTypes.Value },
    { key: 'type', value: 'Type', type: ColumnTypes.Value },
    { key: 'notes', value: 'Notes', type: ColumnTypes.Value },
    { key: 'status', value: 'Status', type: ColumnTypes.Value },
    { key: 'jobNumber', value: 'Job Number', type: ColumnTypes.Value },
    { key: 'companyNotes', value: 'Company/Notes', type: ColumnTypes.Value },
    { key: 'startDate', value: 'Start Date', type: ColumnTypes.Date },
    { key: 'endDate', value: 'End Date', type: ColumnTypes.Date },
    { key: 'details', type: ColumnTypes.Button }
  ]

  const onDetailsClick = (id) => {
    console.log(id)
  }

  const rowData = equipment.map(e => ({
    key: e.serial_number,
    data: [
      { id: e.id, key: 'serialNumber', value: e.serial_number, type: ColumnTypes.Value },
      { id: e.id, key: 'oem', value: e.oem, type: ColumnTypes.Value },
      { id: e.id, key: 'model', value: e.model, type: ColumnTypes.Value },
      { id: e.id, key: 'type', value: e.type, type: ColumnTypes.Value },
      { id: e.id, key: 'notes', value: e.notes, type: ColumnTypes.Value },
      { id: e.id, key: 'status', value: e.event_status, type: ColumnTypes.Value },
      { id: e.id, key: 'jobNumber', value: e.event_job_number, type: ColumnTypes.Value },
      { id: e.id, key: 'companyNotes', value: e.event_company_notes, type: ColumnTypes.Value },
      { id: e.id, key: 'startDate', value: e.event_start_date, type: ColumnTypes.Date },
      { id: e.id, key: 'endDate', value: e.event_end_date, type: ColumnTypes.Date },
      { id: e.id, key: 'details', value: 'Details', type: ColumnTypes.Button, callback: onDetailsClick }
    ]
  }))

  return (
    <div>
      <NavBar title='Equipment' />
      <FullTable
        headerData={headerData}
        rowData={rowData}
        startingSortKey={'serialNumber'}
        startingSortAscending={true}
      />
    </div>
  )
}
