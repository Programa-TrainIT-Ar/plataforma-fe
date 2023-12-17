import { AvailableThemes,CellNameLS } from "../enums/enumThemes";

export const getThemeFromLocalStorage = ():AvailableThemes | null => {
  const themeSelected = localStorage.getItem(CellNameLS.theme)
  if(themeSelected && themeSelected in AvailableThemes) return themeSelected as AvailableThemes
  return null
}