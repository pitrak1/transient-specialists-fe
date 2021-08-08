import React from 'react'
import Head from 'next/head'
import { Box, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { loginRequest } from '../src/externalRequests.jsx'
import Router from 'next/router'
import Cookies from 'js-cookie'

export default function Index() {
  const [username, setUsername] = React.useState('')
  const onChangeUsername = (event) => setUsername(event.target.value)

  const [password, setPassword] = React.useState('')
  const onChangePassword = (event) => setPassword(event.target.value)

  const [isLoading, setLoading] = React.useState(false)
  const [isInvalid, setInvalid] = React.useState(false)

  const onSubmit = () => {
    setLoading(true)
    const success = (response) => {
      Cookies.set('AuthToken', response.data.authToken, { sameSite: 'Lax' })
      Router.push('/')
    }
    const failure = (error) => {
      setInvalid(true)
      setLoading(false)
    }
    loginRequest(username, password, success, failure)
  }

  return (
    <Container>
      <Head>
        <title>Transient Specialists Inventory</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <VStack spacing='24px'>
          <Heading>Transient Specialists Inventory</Heading>
          <Box>
            <Text>Username</Text>
            <Input
              isDisabled={isLoading}
              isInvalid={isInvalid}
              value={username} 
              onChange={onChangeUsername} 
              size='md'
            />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              isDisabled={isLoading}
              isInvalid={isInvalid}
              value={password} 
              onChange={onChangePassword} 
              type='password' 
              size='md'
            />
          </Box>
          <Box>
            <Text color='red'>{isInvalid && 'Login Failed'}</Text>
            <Button
              isLoading={isLoading}
              colorScheme='blue' 
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </main>
    </Container>
  )
}