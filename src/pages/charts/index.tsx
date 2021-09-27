import React from 'react'
import { mockBarChartRegionais, BarChart, PairDonutChart, BarComponent, mockBarChartMeses, BarLineChart, MockDailyChart } from '@/components'
import { AnualPerformaceType, LineAnualPerformaceType } from '@/types'

export const ChartsTest: React.FC = () => {
  const meta:number = 95

  const formatedData = () => {
    let previousLastYear:Array<number> = [0]
    
    const i = mockBarChartMeses.map(({month, value, lastYear}) => { 
      const itemSale:AnualPerformaceType = {
        month: month,
        value: value,
        color: value >= meta ? '#bada2e' : '#e5e5e5',
        lastYear: lastYear || undefined,
      }
      previousLastYear.push(lastYear || 0)
      return itemSale 
    })

    return i.map((item, index) => {
      const r:LineAnualPerformaceType = {...item, previousLastYear: previousLastYear[index]}
      return r
    })
  }

  const formatedColor = () => {
    return MockDailyChart.map((item) => { 
      return {
        ...item,
        color: item.value >= meta ? '#bada2e' : '#e5e5e5',
      }
    })
  }

  return (
    <div style={{display:'inline-block', width:'100%'}}>
      <PairDonutChart
        height={230}
        width={430}
        leftId='Pendente no Prazo'
        leftLabel='Pendente no Prazo'
        leftValue={1996}
        leftColor='#cae4b8'
        rightId='Pendente Atrasado'
        rightLabel='Pendente Atrasado'
        rightValue={1140}
        rightColor='#fab9bc'
      />
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
        margin={{left:100}}
      />
      <BarChart
        height={180}
        width={1250}
        label={(data) => `${data.value}%`}
        data={formatedColor()}
        dataAlign='vertical'
        lineMarkers={[
          {value: meta, label: '', color: '#053e1f'}
        ]}
        keys={['value']}
        indexBy="day"
        maxValue={100}
        // customGridLayer={LassDenseHorizontalGrid}
      />
      <BarLineChart
        height={230}
        width={1250}
        label={(data) => `${data.value}%`}
        data={formatedData()}
        lineMarkers={[
          {value: meta, label: '', color: '#053e1f'}
        ]}
        bar='value'
        index='month'
        line='lastYear'
        maxValue={100}
        padding={.5}
      />
      <BarLineChart
        height={300}
        width={900}
        label={(data) => `${data.value}%`}
        data={formatedData()}
        lineMarkers={[
          {value: meta, label: `meta de vendas: ${meta}`, color: '#053e1fff'}
        ]}
        bar='value'
        index='month'
        line='lastYear'
        maxValue={100}
      />
    </div>
  )
}
