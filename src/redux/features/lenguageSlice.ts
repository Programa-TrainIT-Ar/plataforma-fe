import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dictionaries from '../../../public/locales/export';
import { DictionaryLenguage, LenguageAvailable } from "../../../public/locales/interface/DictionaryLenguage"



interface LenguageState {
  lenguage: LenguageAvailable;
  dictionary:DictionaryLenguage
}
// const themeSaved = getThemeFromLocalStorage()
const initialState: LenguageState = {
  lenguage:LenguageAvailable.en,
  dictionary:dictionaries.english
};

export const lenguageSlice = createSlice({
  name: 'Lenguage',
  initialState,
  reducers: {
    setLenguage: (state, action: PayloadAction<LenguageAvailable>) => {
      state.lenguage = action.payload;
      if(action.payload === LenguageAvailable.en){
        state.dictionary = dictionaries.english
        return state
      } 
      state.dictionary = dictionaries.spanish
      return state
    },
  },
});

export const { setLenguage } = lenguageSlice.actions;

export default lenguageSlice.reducer;