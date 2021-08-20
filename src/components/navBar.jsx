import Link from 'next/link'
import Head from 'next/head'
import { Box, Spacer, Flex, Heading } from '@chakra-ui/react'

export function NavBar({ title }) {
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
        <Link href='/models'>
          <a className='navBarLink'>Models</a>
        </Link>
        <Link href='/types'>
          <a className='navBarLink'>Types</a>
        </Link>
        <Link href='/itemGroups'>
          <a className='navBarLink'>Item Groups</a>
        </Link>
        <Link href='/reports'>
          <a className='navBarLink'>Reports</a>
        </Link>
      </Flex>
      <Heading className='headerTitle'>{title}</Heading>
    </div>
  )
}