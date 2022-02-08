import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./theme/theme";

import Layout from "./layout/index";
import About from "./layout/about";
import Test from "./layout/test";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
