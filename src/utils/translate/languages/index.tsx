import { iDictionary } from '@/types'
import { ptBr } from './pt-br'

export const dictionary = (lang: string): iDictionary => {
  switch(lang){
  case 'pt-br':
  default:
    return ptBr
  }
}
