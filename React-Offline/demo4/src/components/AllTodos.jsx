import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';



const AllTodos = () => {
    const todoState =useSelector((state=>state.todo));

    const dispatch = useDispatch();
    
  
  

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {todoState.todos.map((todo, index) => (
        <Card key={todo.id}>
          <CardActionArea
            
            
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div" className='text-center'>
                {todo.title}
              
              </Typography>
              <Typography variant="body2" color={`${todo.isComplete ? "success" : "error"}`} className='flex justify-end m-3'>
              {todo.isComplete ? "Complete" : "Pending..."}
              </Typography>
              
              <Stack direction="row" spacing={1} className='flex justify-between m-3'>
                  <CheckIcon/>
                  
                  
                  <DeleteIcon
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  />

                  <EditIcon/>

            </Stack>

            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  )
}

export default AllTodos