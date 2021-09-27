import { iDictionary } from '@/types'
import { dictionary } from './languages'

export const getBrowserLanguage = (): string => {
  return navigator.language.toLowerCase()
}

export const translate = (value: string): string|any => {
  const pickedLanguage: iDictionary = dictionary(getBrowserLanguage())

  return pickedLanguage[value] || `missing translation: "${value}"`
}
