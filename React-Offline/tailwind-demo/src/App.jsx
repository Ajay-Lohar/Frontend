import { createContext, useState } from 'react'
import './App.css'
import Components1 from './components/Components1';
import Components2 from './components/Components2';
import Components3 from './components/Components3';
export const CounterContext =createContext();
 

function App() {
  const [counter, setCounter] =useState(0);
  const name ="Ajay";

  return (

    <div className='h-screen w-screen gap-10'>
      <div className='flex justify-center items-center flex-col pt-56'>
      <h1>{counter}</h1>
      <h1> Counter</h1>
      </div>

    <div className='flex justify-center items-center gap-10'>
      <CounterContext.Provider value={[counter,setCounter,name]}>
        <Components1/>
        <Components2/>
        <Components3/>
      </CounterContext.Provider>



    </div>

    
    </div>
  )
}

export default App
