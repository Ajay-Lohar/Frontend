import React, { useState } from 'react'

const Conter = () => {
const [count,setCount]= useState(0);


// function Increase (){

//     setCount(count +1)
// }

function decrese(){
    setCount(count-1)//1
    // setCount(count-1)//1
    // setCount(count-1)//1

    setCount(prev=>prev-1)//1
    // setCount(prev=>prev-1)//2
    // setCount(prev=>prev-1)//3
    

}

function clear(){
    setCount(0)
}



  return (
    <>

    {/* <button  onClick={Increase}>Increase Count</button><br /><br /><br /> */}
    <button  onClick={()=>setCount(count+1)}>Increase Count</button><br /><br /><br /> 
    {/* / direct  call  */}
    <button onClick={decrese}>Decrease Count</button><br /><br /><br />
    <button onClick={clear}>Reset Count</button>
    <h1>
      counter is :  {count}
    </h1>
        
    </>
  )
}

export default Conter