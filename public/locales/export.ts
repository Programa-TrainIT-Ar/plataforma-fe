import spanishWithoutContract from "./es/common.json"
import englishWithoutContract from "./en/common.json"
import { DictionaryLanguage } from "./interface/DictionaryLanguage"

const englishContract = spanishWithoutContract as DictionaryLanguage
const spanishContract = englishWithoutContract as DictionaryLanguage
let languages = {
  spanish:spanishContract,
  english:englishContract
}


export default languages;
