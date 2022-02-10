import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./theme/theme";

import Layout from "./layout/index";
import About from "./layout/about";
import Test from "./layout/test";

import Particles from 'react-tsparticles';

import { Routes, Route } from "react-router-dom";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
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
