import React, { useContext } from 'react'
import { CounterContext } from "../App"

const Components2 = () => {
const [counter, setCounter] = useContext(CounterContext);
  return (
    <div>
        <button onClick={()=>setCounter(counter + 1)}>
            Increase Counter
        </button>
    </div>
)}

export default Components2