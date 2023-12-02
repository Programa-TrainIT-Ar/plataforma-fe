


import { configureStore } from '@reduxjs/toolkit';

// reducers
import { colorThemeReducer,reducerExample,reducerLenguage } from './features/index';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    reducerExample: reducerExample,
    reducerLenguage: reducerLenguage
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;