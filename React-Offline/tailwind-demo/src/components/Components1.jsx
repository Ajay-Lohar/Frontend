import React, { useContext } from 'react'
import { CounterContext } from '../App'

const Components1 = () => {
    const [counter, setCounter,name] = useContext(CounterContext);
  return (
    <div style={{display :"flex" , justyfyContent:"center" , padding:"20px"}}>
        <button  onClick={()=>setCounter(counter + 1)}>
            Increase Counter 
        </button>
        Name {name}
    </div>
  )
}

export default Components1