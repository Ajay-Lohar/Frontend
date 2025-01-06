import React, { useState } from 'react'

const Counter = () => {
    const [counter , setcounter] = useState(0);
    const [isLogin, setLogin] = useState(true);
  // console.log("hi");
  
    function handelButton(){
      // 0
      console.log(counter);
      
      // setcounter(counter + 2); // old value = 0 + 2
      setcounter(counter + 1); // old value = 0 + 1
  
      setLogin(!isLogin);// alternate button logic
    }

  return (
    <div><h2>{counter}</h2>
    <h3> {isLogin ? <button>LogOut</button> : <button>Login</button>}</h3>
    <button onClick={handelButton} >Increase Counter</button>
    <button onClick={()=>handelButton()} >Increase 1 Counter</button>
    </div>
  )
}

export default Counter