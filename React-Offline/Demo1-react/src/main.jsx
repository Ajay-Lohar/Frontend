import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Conter from './Componant/conter.jsx'
import Products from './Componant/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Conter/> */}
    <Products/>

  </StrictMode>,
)
