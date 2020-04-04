import React from 'react'
import { LineChart, Line, YAxis, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useGetSelfReports } from '../../hooks/selfReportsHooks'
import HealthCheckNames from '../../enums/HealthCheckNames';

// import styles from './chart.scss'

interface ChartProps<K extends string, T extends Record<K, number>> {
  // data: T[]
  // dataKey: K
}

export default function MockChart<K extends string, T extends Record<K, number>>({
  // data,
  // dataKey
}: ChartProps<K, T>) {
  const reports = useGetSelfReports(HealthCheckNames.BodyTemperature);

  const mmm = reports?.map(q => ({
    name: 'Test',
    temperature: q.answerId
  }))

  if(!mmm) {
    return null
  }

  const min = Math.min(...mmm.map(item => item["temperature"]))
  const max = Math.max(...mmm.map(item => item["temperature"]))

  return (
    <ResponsiveContainer width='100%' aspect={4.0/3.0}>
    <LineChart
      // width={730}
      // height={250}
      data={mmm}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[min * 0.90, max * 1.10]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
    </LineChart>
    </ResponsiveContainer>
  )
}
