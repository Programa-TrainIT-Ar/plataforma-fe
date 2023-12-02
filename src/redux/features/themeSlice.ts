import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableThemes } from '../../app/(full-content)/themeConfig/enumThemes';

interface ThemeState {
  theme: AvailableThemes;
}

const initialState: ThemeState = {
  theme: AvailableThemes.light
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AvailableThemes>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;