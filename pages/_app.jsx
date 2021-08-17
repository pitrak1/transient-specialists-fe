import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      '.navBar': { backgroundColor: 'royalblue', padding: 4, color: 'white' },
      '.navBarLink': { paddingLeft: 4 },
      '.tableLastHeading': { width: '1px' },
      '.headerTitle': { padding: 2 }
    },
  },
})

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App