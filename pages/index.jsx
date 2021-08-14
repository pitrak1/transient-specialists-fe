import React, { useEffect } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { equipmentRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'

export default function Index() {
  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    }

    console.log('ggot here')
    const success = (data) => {
      console.log(data)
    }
    const failure = (error) => {
      console.log(error)
    }
    equipmentRequest(success, failure)
  }, [])

  return (
    <Container>
      <Head>
        <title>Transient Specialists Inventory</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <VStack spacing='24px'>
          <Heading>Equipment</Heading>
        </VStack>
      </main>
    </Container>
  )
}