import { BarChartProps } from '@/types'
import { BarItemProps } from '@nivo/bar'
import React, { FC } from 'react'
import { BarChart, defaultTooltip } from './bar-chart'

export interface BarLineChartProps extends Omit<BarChartProps, 'keys' | 'barComponent' | 'dataAlign' | 'customGridLayer' | 'indexBy'> {
  index: string 
  bar: string
  line: string
}

export const BarLineChart:FC<BarLineChartProps> = ({
  bar,
  data,
  height,
  index,
  label,
  lineMarkers,
  maxValue,
  width,
  padding = 0.3
}) => {

  const BarLineComponent:FC<BarItemProps> = ({ x, y, width, height, color, data, onClick, showTooltip, tooltip, hideTooltip, label}) => {
    const lastYearY = () => height - Math.round(height * ((data.data?.lastYear as number) / data.value))
    const lastYearX = () => Math.round(width / 2)
    const lastYearPointToY = () => Math.round((data.value - (data.data?.previousLastYear as number)) * (height/data.value))
    const lastYearPointToX = () => -Math.round((x / (data.index + firstElementRatioX)) - lastYearX() - innerCircleRatio())
    const outerCircleRatio = () => Math.round(width / 6)
    const innerCircleRatio = () => Math.round(width / 20)
    const firstElementRatioX = padding
    const tooltipContent = (tooltip && tooltip({
      id: data.id,
      value: data.value,
      index: data.index,
      indexValue: data.indexValue,
      data: data.data,
      color: color
    })) || label
  
    return (
      <g transform={`translate(${x},${y})`}>
        <rect
          width={width}
          height={height}
          fill={color}
          onClick={(e) => onClick(data, e)}
          onMouseMove={(e) => showTooltip(defaultTooltip(tooltipContent), e)}
          onMouseLeave={hideTooltip}
        />
        { data.data?.previousLastYear &&
          <line x1={lastYearX()} y1={lastYearY()} x2={lastYearPointToX()} y2={lastYearPointToY()} style={{stroke:'rgb(94,94,94)', strokeWidth:1}} />
        }
        { data.data?.lastYear &&
          <circle cx={lastYearX()} cy={lastYearY()} r={outerCircleRatio()} fill='rgb(94,94,94)' />
        }
        { data.data?.lastYear &&
          <circle cx={lastYearX()} cy={lastYearY()} r={innerCircleRatio()} fill='rgb(255, 255, 255, .8)' />
        }
        <text x={Math.round(width / 2)} y={7} width={width} textAnchor='middle' dominantBaseline='central' fill='rgba(0, 0, 0)' 
          style={{
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: 13,
            // textShadow: '1px 1px 3px white, -1px -1px 3px white'
          }}
        >
          { label }
        </text>
      </g>
    )
  }


  return (
    <BarChart
      height={height}
      width={width}
      data={data}
      dataAlign='vertical'
      label={label}
      lineMarkers={lineMarkers}
      keys={[bar]}
      indexBy={index}
      barComponent={BarLineComponent}
      maxValue={maxValue}
      // customGridLayer={LassDenseHorizontalGrid}
      padding={padding}
    />
  )
}