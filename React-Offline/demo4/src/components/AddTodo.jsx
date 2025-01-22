import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addTodo } from '../sclices/todoSlice';


const AddTodo = () => {
    const[todoInput ,setTodoInput] =useState("");

    const dispatch = useDispatch();

     const handleButtonClick = () => {
    console.log(todoInput);

    const todoObj = {
      title: todoInput,
      id: Date.now(),
      isComplete:false,
    };

    dispatch(addTodo(todoObj));
    setTodoInput("");
  };

  return (
    <div className='p-5 text-center'>
        <TextField id="standard-basic" 
        label="Add To Do"
         variant="standard" 
         type="text" 
         onChange={(e) => setTodoInput(e.target.value)

         }
        value={todoInput} />
         <Button variant="contained" onClick={() => handleButtonClick()}>
        Add To do
      </Button>
     
    </div>
  )
}

export default AddTodo