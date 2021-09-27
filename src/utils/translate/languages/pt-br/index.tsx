import React from 'react'
import { iDictionary } from '@/types'
import { BoldAlert } from '@/styles'

const general: iDictionary = {
  '404-error': 'Página {1} não encontrada',
  'hello-world': 'Olá Mundo',
  'pt-br': 'Português Brasileiro',
  'test': (
    <div>
      translate que aceita marcação <b> para formatar e organizar </b>
      textos que precisam de formatação e usar <BoldAlert>custom component!</BoldAlert>
    </div>
  ),
}

const teste: iDictionary = {
  'pt-br': 'Português Brasileiro',
  'algo': 'algo aqui',
  'mais': 'mais alguma coisa',
}

export const ptBr: iDictionary = { ...general, ...teste }
