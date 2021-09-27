export const formatNumber = (value:number, precision?: number, region?:string) => {
  if (precision === 0) {
    return Number(Math.round(value)).toLocaleString(
      region || 'pt-BR'
    )
  }
  return (
    Number(value).toLocaleString(
      region || 'pt-BR', 
      { minimumFractionDigits: precision || 0 }
    )
  )
}
