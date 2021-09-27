import { InputContainer, InputLabel, Input } from '@/styles'
import { iInputText } from '@/types'
import React from 'react'

export const InputText: React.FC<iInputText> = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input {...rest} />
    </InputContainer>
  )
}
