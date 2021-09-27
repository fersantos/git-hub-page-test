import React, { FC, useEffect, useState } from 'react'
import { PieLayer, ResponsivePie } from '@nivo/pie'
import { formatNumber } from '@/utils'
import { dataType, PairDonutChartProps } from '@/types'

export const PairDonutChart:FC<PairDonutChartProps> = ({
    height = '230px',
    leftId,
    leftLabel,
    leftValue,
    leftColor,
    margin = {left:30,right:30,top:30,bottom:30},
    rightId,
    rightLabel,
    rightValue,
    rightColor,
    width = '430px'
}) => {  
  const [values, setValue] = useState<dataType[]>([])

  useEffect(() => {
    setValue([
      {
        id: leftId,
        label: rightLabel,
        value: rightValue,
        color: rightColor
      },
      {
        id: rightId,
        label: leftLabel,
        value: leftValue,
        color: leftColor
      }
    ])
  },[])

  const centeredMetric = (args: {centerX:number, centerY:number}) => {  
    return (
      <g>
        <text
          x={args.centerX}
          y={args.centerY}
          textAnchor='middle'
          dominantBaseline='central'
          
          style={{
            color: '#666666',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        >
          {formatNumber(rightValue + leftValue)}
        </text>
        <text
          x={args.centerX}
          y={args.centerY+12}
          textAnchor='middle'
          dominantBaseline='central'
          
          style={{
            color: '#666666',
            fontSize: '9px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        >
          total pendentes
        </text>
      </g>
    )
  }
  const sidedParedLegend:PieLayer<dataType> = (props) => {
    return (
      <g>
        <text
          x={props.centerX-170}
          y={props.centerY}
          textAnchor='middle'
          dominantBaseline='central'
          
          style={{
            color: '#666666',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        >{Math.round((leftValue / (leftValue + rightValue))*100)}%</text>
        <circle cx={props.centerX -130} cy={props.centerY} r={10} fill='#cae4b8' />
        <text
          x={props.centerX+170}
          y={props.centerY}
          textAnchor='middle'
          dominantBaseline='central'
          
          style={{
            color: '#666666',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        >{Math.round((rightValue / (leftValue + rightValue))*100)}%</text>
        <circle cx={props.centerX +130} cy={props.centerY} r={10} fill='#fab9bc' />
      </g>
    )
  }

  return (
    <div style={{height: height, width: width, display: 'flex'}}>
      <ResponsivePie
        data={values}
        innerRadius={0.60}
        valueFormat={value => formatNumber(value)}
        margin={margin}
        colors={ data => data.data.color }
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableRadialLabels={false}
        enableSliceLabels={false}
        layers={[ sidedParedLegend, 'slices', 'sliceLabels', 'radialLabels', 'legends', centeredMetric ]}
      />
    </div>
  )
}
