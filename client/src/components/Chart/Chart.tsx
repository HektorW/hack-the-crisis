import React from 'react'
import { LineChart, Line, YAxis } from 'recharts'

import styles from './chart.scss'

interface ChartProps<K extends string, T extends Record<K, number>> {
  data: T[]
  dataKey: K
}

export default function Chart<K extends string, T extends Record<K, number>>({
  data,
  dataKey
}: ChartProps<K, T>) {
  const min = Math.min(...data.map(item => item[dataKey]))
  const max = Math.max(...data.map(item => item[dataKey]))

  return (
    <LineChart data={data} width={400} height={400}>
      <YAxis domain={[min * 0.95, max * 1.05]} hide />
      <Line dataKey={dataKey} type="monotone" strokeWidth={3} dot={false} />
    </LineChart>
  )
}
