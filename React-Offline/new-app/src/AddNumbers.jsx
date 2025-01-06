import React, { useState } from 'react'

const AddNumbers = () => {
    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [sum , setSum] = useState(0);

    function addNumber(){

       setSum(parseInt(num1)+ parseInt(num2));
    //    setSum(num1+ num2); // thise is  String Concate 

    }

  return (
    <div>
        <h1>AddNumbers</h1>
        <input type="number" 
        placeholder='Enter 1 Number' 
        onChange={(event)=>setNum1(event.target.value)} />
    <br/>
    <br/>

        <input type="number" 
        placeholder='Enter 2 Number' 
        onChange={(event)=>setNum2(event.target.value)} />
    <br/>
    <br/>
        <button onClick={addNumber}>Calculate Sum</button>
         <br/>
        <br/>
        <h3> Sum Of {num1} and {num2} is : {sum}</h3>

        </div>

  )
}

export default AddNumbers