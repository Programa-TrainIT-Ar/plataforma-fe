import reducerExample from './features/exampleSlice'; 
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {  //!here we need add our reducers
    reducerExample
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;