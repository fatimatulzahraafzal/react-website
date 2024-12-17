import React from 'react';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import About from './components/about';
import Partners from './components/partners';
import Products from './pages/products';  // Import the Products component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/more-info' element={<Partners />} />
          <Route path='/:slug' element={<Detail />} />
          <Route path='/products/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;