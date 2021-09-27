import styled from 'styled-components'
import { colorsLight } from '../colorPallet'

export const BoxWarning = styled.div`
  background-color: ${colorsLight.Warnning};
  border: 15px solid #fcb600;
  border-radius: 5px;
  display:flex;
  margin: auto;
  justify-content: center;
  align-items: center;
`

export const Texto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background-color: ${colorsLight.TextBackground};
  &:hover{
    background-color: ${colorsLight.TextBackgroundHover};
    box-shadow: 0 0 5px 0 #999;
  }
  margin: auto;
`

export const BoldAlert = styled.b`
  color: ${colorsLight.Danger};
`

export const InputContainer = styled.div`
  background-color: ${colorsLight.TextBackground};
  display: flex;
  font-family: arial;
  color: ${colorsLight.DefaultText};
  margin: 3px;
  height: 25px;
  padding: 4px
`

export const InputLabel = styled.label`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`

export const Input = styled.input`
  background-color: ${colorsLight.TextBackground};
  border-style: none none solid none;
  border-width: thin;
  border-color: ${colorsLight.BorderColor};
  font-family: arial;
  text-align: ${(props:any) => props.textAlign};
  &:hover, :focus {
    background-color: ${colorsLight.TextBackgroundHover};
  }
`
