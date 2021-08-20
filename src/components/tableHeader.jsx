import Link from 'next/link'
import Head from 'next/head'
import { Box, Spacer, Flex, Heading } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'

export function TableHeader({ sortable, sortKey, currentSortKey, currentSortDirection, children }) {
  const getIcon = () => {
    if (sortKey == currentSortKey) {
      return currentSortDirection == 'ASC' ? (<ChevronUpIcon boxSize={6} />) : (<ChevronDownIcon boxSize={6} />)
    }
  }

  return (
    <Th>{children}{getIcon()}</Th>
  )
}