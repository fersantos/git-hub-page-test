import React from 'react'
import { useLocation } from 'react-router-dom'
import { translate } from '@/utils'
import { BoxWarning } from '@/styles'

export const PageNotFound: React.FC = () => {
  const location = useLocation()
  return (
    <BoxWarning>
      <h1>{location.pathname}</h1>
      <div>{translate('404-error')}</div>
    </BoxWarning>
  )
}
