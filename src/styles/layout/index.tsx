import styled from 'styled-components'
import { colorsLight } from '../colorPallet'

export const Page = styled.div`
  display-box: flex;
  background-color: ${colorsLight.TextBackground};
  height: 100%;
`

export const Header = styled.div`
  display-box: flex;
  background-color: ${colorsLight.TextBackground};
  border-color: ${colorsLight.BorderColor};
  border-bottom-style: solid;
  border-width: thin;
  padding: 5px
`

export const Body = styled.div`
  display-box: flex;
  background-color:${colorsLight.TextBackground};
  min-heigth: 720px;
  padding: 5px
`

export const Footer = styled.div`
  display-box:flex;
  background-color: ${colorsLight.TextBackground};
  border-color: ${colorsLight.BorderColor};
  border-top-style: solid;
  border-width: thin;
  height: 30px;
  padding: 5px
`
