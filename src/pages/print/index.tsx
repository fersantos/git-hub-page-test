import { BarChart, BarComponent, mockBarChartRegionais } from '@/components'
import React, { FC, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Login } from '../login'
import { BoxStyled, ButtonStyled } from './styles'

export const Print: FC = () => {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({ content: () => componentRef?.current })
  return (
    <div>
      <ButtonStyled onClick={handlePrint}>Imprimir</ButtonStyled>
      <BoxStyled ref={componentRef}>
        <div style={{ color: 'green', fontSize: '30px', display: 'inline-flex', width: '100%' }}>só oque está na area azul irá ser impresso</div>
        <div style={{ display: 'inline-flex' }}>
          <BarChart
            height={170}
            width={370}
            data={mockBarChartRegionais}
            dataAlign='horizontal'
            barComponent={BarComponent}
            // customGridLayer={LassDenseVerticalGrid}
            label={(data) => `${data.value}%`}
            gridLines={4}
            keys={['sales']}
            indexBy="regional"
            maxValue={100}
            margin={{ left: 100 }}
          />
        </div>
        <Login />
      </BoxStyled>
      mais um monte de texto porque não tenho muita coisa pra importar pronta
    </div>
  )
}
