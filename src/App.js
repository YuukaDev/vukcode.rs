import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./theme/theme";

import Layout from "./layout/index";
import About from "./layout/about";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
