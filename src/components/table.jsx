import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Spacer, Flex, Heading, Button } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react'
import { createEnum, displayDateFromISO } from '../utils.jsx'

export const ColumnTypes = createEnum(['Value', 'Date', 'Button'])

export function FullTable({ headerData, rowData, startingSortKey, startingSortAscending }) {
  const [sortKey, setSortKey] = React.useState(startingSortKey)
  const [sortAscending, setSortAscending] = React.useState(startingSortAscending)

  const onTableHeaderClick = (key) => {
    if (key == sortKey) {
      setSortAscending(!sortAscending)
    } else {
      setSortKey(key)
      setSortAscending(true)
    }
  }

  const tableHeaders = headerData.map(data => (
    <TableHeader key={data.key} headerData={data} sortKey={sortKey} sortAscending={sortAscending} onTableHeaderClick={onTableHeaderClick} />
  ))

  const tableRows = rowData.map(data => (
    <TableRow key={data.key} rowData={data} />
  ))

  return (
    <Table>
      <Thead>
        <Tr>
          {tableHeaders}
        </Tr>
      </Thead>
      <Tbody>
        {tableRows}
      </Tbody>
    </Table>
  )
}

export function TableHeader({ headerData, sortKey, sortAscending, onTableHeaderClick }) {
  const getIcon = () => {
    if (sortKey == headerData.key) {
      if (sortAscending) {
        return (<ChevronUpIcon boxSize={6} />)
      } else {
        return (<ChevronDownIcon boxSize={6} />)
      }
    }
  }

  if (headerData.button) {
    return (<Th className='tableButtonHeading'></Th>)
  } else {
    return (
      <Th>
        <Button variant='ghost' rightIcon={getIcon()} onClick={onTableHeaderClick.bind(null, headerData.key)}>
          {headerData.value}
        </Button>
      </Th>
    )
  }
}

export function TableRow({ rowData }) {
  const rowCells = rowData.data.map(data => (
    <TableCell key={data.key} cellData={data} />
  ))

  return (
    <Tr>
      {rowCells}
    </Tr>
  )
}

export function TableCell({ cellData }) {
  if (cellData.type == ColumnTypes.Value) {
    return (<Td>{cellData.value}</Td>)
  } else if (cellData.type == ColumnTypes.Date) {
    return (<Td>{displayDateFromISO(cellData.value)}</Td>)
  } else {
    return (
      <Td>
        <Button variant='ghost' onClick={cellData.callback.bind(null, cellData.id)}>
          {cellData.value}
        </Button>
      </Td>
    )
  }
}