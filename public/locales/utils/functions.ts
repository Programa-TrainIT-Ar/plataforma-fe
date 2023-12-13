import { LanguageAvailable, 
LocalStorageCellName, DictionaryLanguage } from '../interface/DictionaryLanguage';
import dictionaries from "../export"
interface ReturnFunction {
  languageSaved:LanguageAvailable
  dictionarySaved:DictionaryLanguage
}

export const getLanguageFromLocalStorage = ():ReturnFunction | null => {
  const languageSaved = localStorage.getItem(
LocalStorageCellName.language)
  
  if(languageSaved && languageSaved in LanguageAvailable) {
    return {
      languageSaved: languageSaved as LanguageAvailable,
      dictionarySaved: languageSaved === LanguageAvailable.en ? dictionaries.english : dictionaries.spanish
    }
  }
  return null
}