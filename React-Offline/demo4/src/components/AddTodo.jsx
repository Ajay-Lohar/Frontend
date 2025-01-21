import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTodo = () => {
    const[todoInput ,setToduInput] =useState();
  return (
    <div className='p-5 text-center'>
        <TextField id="standard-basic" label="Add To Do" variant="standard" type="text" />
        <Button variant="contained">Contained</Button>
    </div>
  )
}

export default AddTodo