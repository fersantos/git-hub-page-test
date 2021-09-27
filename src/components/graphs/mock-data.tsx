import { AnualPerformaceType, dailyDataType, salesType } from '@/types';
import { Serie } from '@nivo/line';

export const mockBarChartRegionais:salesType[] = [
  {
    regional: 'Norte',
    sales: 95,
  },
  {
    regional: 'Sul',
    sales: 92,
  },
  {
    regional: 'SP',
    sales: 84,
  },
  {
    regional: 'C. Oeste',
    sales: 96,
  },
  {
    regional: 'Interior SP',
    sales: 87,
  },
  {
    regional: 'teste densidade',
    sales: 99,
  },
]

export const mockBarChartMeses:AnualPerformaceType[] = [
  {
    month: 'JAN',
    value: 68,
    lastYear: 60
  },
  {
    month: 'FEV',
    value: 87,
    lastYear: 48
  },
  {
    month: 'MAR',
    value: 71,
    lastYear: 96
  },
  {
    month: 'ABR',
    value: 95,
    lastYear: 70
  },
  {
    month: 'MAI',
    value: 55,
    lastYear: 20
  },
  {
    month: 'JUN',
    value: 83,
    lastYear: 55
  },
  {
    month: 'JUL',
    value: 96,
    lastYear: 70
  },
  {
    month: 'AGO',
    value: 73,
    lastYear: 80
  },
  {
    month: 'SET',
    value: 66,
    lastYear: 45
  },
  {
    month: 'OUT',
    value: 55,
    lastYear: 73
  },
  {
    month: 'NOV',
    value: 80,
    lastYear: 70
  },
  {
    month: 'DEZ',
    value: 30,
    lastYear: 50
  },
]

export const mockLineChart:Serie[] = [
  {
    id: 'Previous Sales',
    color: 'hsl(240, 70%, 50%)',
    data: [
      {
        x: 'item 1',
        y: 155,
      },
      {
        x: 'item 2',
        y: 170,
      },
      {
        x: 'item 3',
        y: 230,
      },
      {
        x: 'item 4',
        y: 209,
      },
      {
        x: 'item 5',
        y: 170,
      },
      {
        x: 'item 6',
        y: 267,
      },
    ]
  }
]

export const MockDailyChart:dailyDataType[] =[
  { day: '1', value: 90 },
  { day: '2', value: 15 },
  { day: '3', value: 0 },
  { day: '4', value: 87 },
  { day: '5', value: 92 },
  { day: '6', value: 99 },
  { day: '7', value: 77 },
  { day: '8', value: 56 },
  { day: '9', value: 36 },
  { day: '10', value: 86 },
  { day: '11', value: 78 },
  { day: '12', value: 45 },
  { day: '13', value: 98 },
  { day: '14', value: 100 },
  { day: '15', value: 91 },
  { day: '16', value: 83 },
  { day: '17', value: 71 },
  { day: '18', value: 90 },
  { day: '19', value: 92 },
  { day: '20', value: 66 },
  { day: '21', value: 55 },
  { day: '22', value: 49 },
  { day: '23', value: 59 },
  { day: '24', value: 92 },
  { day: '25', value: 76 },
  { day: '26', value: 67 },
  { day: '27', value: 41 },
  { day: '28', value: 14 },
  { day: '29', value: 7 },
  { day: '30', value: 11 },
  { day: '31', value: 30 }
]
