import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
        name: 'counter',
        initialState: 0,
        reducers: {
            increment:(state)=>{
              return state + 1;
            },
            decrease:(state)=>{
              return state - 1;
            }
        },

})


export const counterReducer = counterSlice.reducer;
export const { increment , decrease } = counterSlice.actions;