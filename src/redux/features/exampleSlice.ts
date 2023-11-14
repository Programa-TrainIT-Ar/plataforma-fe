import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    counter:0
};

export const exampleSlice = createSlice({
  name:'CounterExample',
  initialState,
  reducers: {
    increment: (state) => { //!actions to change global state, we can use this on buttons or anything 
      state.counter = state.counter + 1
    },
    decrement: (state) => { //!actions to change global state, we can use this on buttons or anything  
      state.counter = state.counter - 1
    },
  }
});


export const { increment,decrement } = exampleSlice.actions //!Actions change our global state

const reducer = exampleSlice.reducer //! Reducer is action manager  

export default reducer;