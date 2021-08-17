import Link from 'next/link'
import Head from 'next/head'
import { Box, Spacer, Flex, Heading } from '@chakra-ui/react'

export default function NavBar({ title }) {
  return (
    <div>
      <Head>
        <title>Transient Specialists Inventory | {title}</title>
      </Head>
      <Flex className='navBar'>
        <Box>Transient Specialists Inventory</Box>
        <Spacer />
        <Link href='/'>
          <a className='navBarLink'>Equipment</a>
        </Link>
        <Link href='/oems'>
          <a className='navBarLink'>OEMs</a>
        </Link>
      </Flex>
      <Heading className='headerTitle'>{title}</Heading>
    </div>
  )
}