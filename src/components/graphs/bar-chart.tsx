
import React, { FC, ReactNode, SVGProps } from 'react'
import { BarCustomLayer, BarItemProps, ResponsiveBar } from '@nivo/bar'
import { CartesianMarkerProps } from '@nivo/core'
import { BarChartProps } from '@/types'

// export const LassDenseVerticalGrid:BarCustomLayer = ({ width, height}) => {
//   const linePositionX = (position:number = 1) => (width/5) * (position)

//   return (
//     <g>
//       <line x1={0} y1={0} x2={0} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />      
//       <line x1={linePositionX(1)} y1={0} x2={linePositionX(1)} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={linePositionX(2)} y1={0} x2={linePositionX(2)} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={linePositionX(3)} y1={0} x2={linePositionX(3)} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={linePositionX(4)} y1={0} x2={linePositionX(4)} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={width-1} y1={0} x2={width-1} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//     </g>
//   )
// }

// export const LassDenseHorizontalGrid:BarCustomLayer = ({ width, height}) => {
//   const linePositionY = (position:number = 1) => (height/5) * (position)

//   return (
//     <g>
//       <line x1={0} y1={0} x2={width} y2={0} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />      
//       <line x1={0} y1={linePositionY(1)} x2={width} y2={linePositionY(1)} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={0} y1={linePositionY(2)} x2={width} y2={linePositionY(2)} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={0} y1={linePositionY(3)} x2={width} y2={linePositionY(3)} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={0} y1={linePositionY(4)} x2={width} y2={linePositionY(4)} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//       <line x1={0} y1={height} x2={width} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
//     </g>
//   )
// }
export const defaultTooltip = (content:ReactNode) => {
  return <div style={{display:'flex',padding:'5px',backgroundColor:'white',boxShadow:'1px 1px 2px gray',borderRadius:'2px'}}>{content}</div>
}

export const BarComponent:React.FC<BarItemProps> = ({ x, y, width, height, color, label, data, onClick, showTooltip, tooltip, hideTooltip }) => {
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
        onClick={e => onClick(data, e)}
        onMouseMove={(e) => showTooltip(defaultTooltip(tooltipContent), e)}
        onMouseLeave={hideTooltip}
      />
      <text
        x={width - 5}
        y={Math.round(height / 2)}
        textAnchor='end'
        dominantBaseline='central'
        fill='rgba(0,0,0,1.0)'
        style={{
          fontFamily: 'Arial',
          fontWeight: 'bold',
          fontSize: 13,
        }}
      >
        {label}
      </text>
    </g>
  )
}

export const BarChart:FC<BarChartProps> = ({
  data,
  dataAlign = 'horizontal',
  lineMarkers = [],
  customFrontLayer = () => undefined,
  // customGridLayer,
  barComponent,
  gridLines = 5,
  keys,
  indexBy,
  maxValue = 'auto',
  height = '250px',
  width = '1000px',
  padding = 0.33,
  label,
  margin = { top: 40, right: 40, bottom: 40, left: 40 },
  tooltip
}) => {

  const CustomDensityGrid: BarCustomLayer = ({height, width}) => {
    const linePositionY = (position:number = 1) => (height / gridLines) * (position)
    const linePositionX = (position:number = 1) => (width / gridLines) * (position)
    const align = dataAlign === 'horizontal'
    let count: number
    let lines:SVGProps<SVGLineElement>[] = []

    for (count = 1; count < gridLines; count++) {  
      lines.push( 
        <line key={count}
          x1={align ? linePositionX(count): 0}
          y1={align ? 0 : linePositionY(count)}
          x2={align ? linePositionX(count) : width}
          y2={align ? height : linePositionY(count)}
          style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}}
        />
      )
    }

    return (
      <g>
        <line x1={0} y1={0} x2={align ? 0 : width} y2={align ? height: 0} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />    
        { lines.map(line => line) }  
        <line x1={align? width-1 : 0} y1={align ? 0 : height} x2={align ? width-1 : width} y2={height} style={{stroke:'rgb(94,94,94, .3)', strokeWidth:1}} />
      </g>
    )
  }

  const returnMakers = lineMarkers.map(({value, label, color}) => {
    const marker:CartesianMarkerProps = {
      axis: dataAlign === 'horizontal' ? 'x' : 'y',
      value: value,
      lineStyle: { stroke: color || '#b0413e', strokeWidth: 1 },
      legend: label
    }
    return marker
  })

  return (
    <div style={{height: height, width: width}}>
      <ResponsiveBar
        onClick={(i,e)=>{console.log('cliquei em', i, e)}}
        data={data}
        keys={keys}
        indexBy={indexBy}
        barComponent={barComponent}
        margin={margin}
        label={label}
        enableGridX={dataAlign === 'horizontal'}
        enableGridY={dataAlign !== 'horizontal'}
        padding={padding}
        layout={dataAlign}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={data => data.data.color || '#cae4b8'}
        maxValue={maxValue}
        markers={returnMakers}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        tooltip={tooltip}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32
      }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        layers={['markers', CustomDensityGrid, 'axes', 'bars', 'legends', customFrontLayer]}
      />
    </div>
  )
}
