
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment ,decrease} from './slice/CounterSlice';

function App() {
 const counterState =useSelector((state)=>state.counter);
 console.log(counterState);
 
 const dispatch = useDispatch();
  return (
    <>
    <h1>The Counter {counterState}</h1>
    <button onClick={()=>dispatch(increment())}> Increase counter  </button> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>dispatch(decrease())}> Decrease counter </button>
    </>
  )
}

export default App
