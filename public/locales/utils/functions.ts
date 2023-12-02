import { LenguageAvailable, 
LocalStorageCellName, DictionaryLenguage } from '../interface/DictionaryLenguage';
import dictionaries from "../export"
interface ReturnFunction {
  lenguageSaved:LenguageAvailable
  dictionarySaved:DictionaryLenguage
}

export const getLenguageFromLocalStorage = ():ReturnFunction | null => {
  const lengugeSaved = localStorage.getItem(
LocalStorageCellName.lenguage)
  
  if(lengugeSaved && lengugeSaved in LenguageAvailable) {
    return {
      lenguageSaved: lengugeSaved as LenguageAvailable,
      dictionarySaved: lengugeSaved === LenguageAvailable.en ? dictionaries.english : dictionaries.spanish
    }
  }
  return null
}