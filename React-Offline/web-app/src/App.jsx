import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {TestComponent}  from './TestComponent';
import { Demo } from './Demo';

function App() {
const name ="Ajay ";
  return (
  // react fragments
    <> 
        <div className='container'>
         <h1>{name} </h1>
                  
       <TestComponent/>
        </div>
    </>
  )
}



export default App
