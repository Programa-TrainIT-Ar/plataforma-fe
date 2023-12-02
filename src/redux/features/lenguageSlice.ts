import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dictionaries from '../../../public/locales/export';
import { DictionaryLenguage, LenguageAvailable } from "../../../public/locales/interface/DictionaryLenguage"
import { getLenguageFromLocalStorage } from "../../../public/locales/utils/functions";



interface LenguageState {
  lenguage: LenguageAvailable;
  dictionary:DictionaryLenguage
}
const savedData = getLenguageFromLocalStorage()

const initialState: LenguageState = {
  lenguage: savedData?.lenguageSaved || LenguageAvailable.en,
  dictionary:savedData?.dictionarySaved || dictionaries.english
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