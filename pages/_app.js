import "../styles/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme/theme";

import { library } from "@fortawesome/fontawesome-svg-core";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
