import spanishWithoutContract from "./es/common.json"
import englishWithoutContract from "./en/common.json"
import { DictionaryLenguage } from "./interface/DictionaryLenguage"

const englishContract = spanishWithoutContract as DictionaryLenguage
const spanishContract = englishWithoutContract as DictionaryLenguage
let lenguages = {
  spanish:spanishContract,
  english:englishContract
}


export default lenguages;
