import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme/theme";
import "../styles/style.css";
import { extendTheme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
