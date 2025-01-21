import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
    name: "todoSlice",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {

            state.todos.push(action.payload);
            console.log( action.payload);
            
            
            
        }
    },
});

export const todoReducer=todoSlice.reducer;
export const{addTodo} =todoSlice.actions;