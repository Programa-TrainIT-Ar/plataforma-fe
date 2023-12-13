


import { configureStore } from '@reduxjs/toolkit';

// reducers
import { colorThemeReducer,reducerExample,reducerLanguage } from './features/index';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    reducerExample: reducerExample,
    reducerLanguage: reducerLanguage
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;