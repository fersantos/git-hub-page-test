import { AccessorFunc, BarCustomLayer, BarDatum, BarItemProps, TooltipProp } from "@nivo/bar"
import { Margin } from "@nivo/core"

export interface ChartCommonProps {
  colors?: (props:BarDatum) => string
  data: MyDataTypes[]
  id?: string
  height?: number | string
  margin?: Partial<Margin>
  tooltip?: TooltipProp 
  width?: number | string
}

export interface PairDonutChartProps  extends Omit<ChartCommonProps, 'data'> {
  leftColor: string
  leftId: string
  leftLabel: string
  leftValue: number
  rightColor: string
  rightId: string
  rightLabel: string
  rightValue: number
}

export interface BarChartProps extends ChartCommonProps {
  barComponent?: React.FC<BarItemProps>
  customFrontLayer?: BarCustomLayer 
  // customGridLayer?: BarCustomLayer
  dataAlign?: 'horizontal' | 'vertical'
  gridLines?: number
  indexBy: string
  keys: string[]
  label?: string | AccessorFunc
  lineMarkers?: lineMarkersTypes[]
  maxValue?: number | "auto"
  padding?: number
}

export type MyDataTypes = salesType | AnualPerformaceType | LineAnualPerformaceType | dailyDataType

export type lineMarkersTypes = {
  color?: string
  label: string
  value: number
}

export type salesType = {
  color?: string
  regional: string
  sales: number
}

export type AnualPerformaceType = {
  color?: string
  lastYear?: number
  month: string
  value: number
}

export type LineAnualPerformaceType = AnualPerformaceType & {
  previousLastYear: number
}

export type dataType = {
  color: string
  id: string
  label?: string
  value: number
}

export type dailyDataType = {
  color?: string
  day: string
  value: number
}
