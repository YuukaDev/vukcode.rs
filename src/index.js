import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import About from './layout/about';
import Test from "./layout/test";

import "./styles/style.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
