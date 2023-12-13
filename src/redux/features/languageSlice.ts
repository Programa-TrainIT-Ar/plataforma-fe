import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import dictionaries from '../../../public/locales/export';
import { DictionaryLanguage, LanguageAvailable } from "../../../public/locales/interface/DictionaryLanguage"
import { getLanguageFromLocalStorage } from "../../../public/locales/utils/functions";



interface LanguageState {
  language: LanguageAvailable;
  dictionary:DictionaryLanguage
}
const savedData = getLanguageFromLocalStorage()

const initialState: LanguageState = {
  language: savedData?.languageSaved || LanguageAvailable.en,
  dictionary:savedData?.dictionarySaved || dictionaries.english
};

export const languageSlice = createSlice({
  name: 'Language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageAvailable>) => {
      state.language = action.payload;
      if(action.payload === LanguageAvailable.en){
        state.dictionary = dictionaries.english
        return state
      } 
      state.dictionary = dictionaries.spanish
      return state
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;