import React from 'react'

import Chart from '../../components/Chart'
import PageLayout from '../../components/_layouts/PageLayout'

export default function WelcomePage() {
  return (
    <PageLayout title="Home">
      <h1>
        Above and Beyond{' '}
        <span role="img" aria-label="Eld emoji">
          🔥
        </span>
      </h1>

      <Chart
        dataKey="temp"
        data={[{ temp: 36 }, { temp: 37 }, { temp: 37 }, { temp: 38 }]}
      />
    </PageLayout>
  )
}
