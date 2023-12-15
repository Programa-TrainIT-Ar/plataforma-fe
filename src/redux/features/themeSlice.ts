import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AvailableThemes } from '../../components/themeConfig/utils/enums/enumThemes';
import { getThemeFromLocalStorage } from '../../components/themeConfig/utils/functions/functions';

interface ThemeState {
  theme: AvailableThemes;
}
const themeSaved = getThemeFromLocalStorage()
const initialState: ThemeState = {
  theme:themeSaved || AvailableThemes.light
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