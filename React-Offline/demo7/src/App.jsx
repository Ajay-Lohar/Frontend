
import { useReducer } from 'react'
import './App.css'
import { useMemo } from 'react';
import { useState } from 'react';




const reducer =(state,action) => {
  switch(action.type){
    case "increment":return state + 1;
      
    case "decrement":return state - 1;
    
  }
 
  // if (action.type === 'increment') {
  //   return state + 1;
  // }
  // else if (action.type === 'decrement') {
  //   return state - 1;
  // }

}
function App() {

 const [countState,dispatch] =  useReducer(reducer,0);

 const [count ,setCount] = useState(0);
 const [count2 ,setCount2] = useState(0);

 const totalPrice =useMemo(()=>{
  console.log("Hi ");
  return (count*(count+1))/2;},[count]);
//  console.log(totalPrice);
 
const callBackFuction = useCallback(()=>{

})
  return (
    <>
    {/* <h2>Hello there  {countState}</h2> */}



    <h2>Hello there  {count}</h2>
    <h2>Hello there  {count2}</h2>
    {/* <button onClick={()=>dispatch({type:"increment"})}>Click me  +</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Click me  -</button> */}
    <button onClick={()=>setCount(count+1)}>Click me  +</button>
    <button onClick={()=>setCount2(count2-1)}>Click me  -</button>
    </>
  )
}

export default App



//useMemo
//UseTransaction 
//UseActionTransaction