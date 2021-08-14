import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { equipmentRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import Header from '../src/components/header'

export default function Oems() {
  const [oems, setOems] = React.useState([])

  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    }

    const success = (response) => {
      setOems(response.data)
    }
    const failure = (error) => {
      console.log(error)
    }
    equipmentRequest(success, failure)
  }, [])

  return (
    <div>
      <Header title='OEMs' />
      <Table>
        <Thead>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Notes</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
        </Tbody>
      </Table>
    </div>
  )
}