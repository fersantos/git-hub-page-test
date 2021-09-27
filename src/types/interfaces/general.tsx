import { InputHTMLAttributes, ReactNode } from "react";

export interface iDictionary {
  [id: string]: ReactNode
}  

export interface iInputText extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  value?: string
  textAlign?: string
}
