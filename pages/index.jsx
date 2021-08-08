import React, { useEffect } from 'react'
import Head from 'next/head'
import { Box, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { gamesRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'

export default function Index() {
  useEffect(() => {
    if (!Cookies.get('AuthToken')) {
      Router.push('/login')
    }
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