


import { configureStore } from '@reduxjs/toolkit';

// reducers
import { colorThemeReducer,reducerExample } from './features/index';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    reducerExample:reducerExample
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;