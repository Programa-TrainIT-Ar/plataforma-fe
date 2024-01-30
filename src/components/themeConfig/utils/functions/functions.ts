'use client'
import { AvailableThemes, CellNameLS } from "../enums/enumThemes";

export const getThemeFromLocalStorage = (): AvailableThemes | null => {
  if (typeof window !== 'undefined') {
    const themeSelected = localStorage.getItem(CellNameLS.theme)
    if (themeSelected && themeSelected in AvailableThemes) return themeSelected as AvailableThemes
    return null
  }
  return null

}