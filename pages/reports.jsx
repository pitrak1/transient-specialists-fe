import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { oemsRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'
import { NavBar } from '../src/components/navBar'

export default function Oems() {
  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    }
  }, [])

  return (
    <div>
      <NavBar title='Reports' />
    </div>
  )
}