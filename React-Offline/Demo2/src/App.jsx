import React from 'react'
import './App.css'
import  {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

function App() {

  return (
    <>
    <BrowserRouter>
    <h1>Header</h1>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='Product/:productId' element={<Product />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
