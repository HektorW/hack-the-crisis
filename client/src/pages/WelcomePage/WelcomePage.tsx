import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Chart from '../../components/Chart'
import HealthCheckDialog from '../../components/HealthCheckDialog'
import PrimaryButton from '../../components/_buttons/PrimaryButton'
import PageLayout from '../../components/_layouts/PageLayout'

export default function WelcomePage() {
  const [showHealthCheck, setShowHealthCheck] = useState(false)

  function onShowHealthCheckClick() {
    setShowHealthCheck(true)
  }

  function onCloseHealthCheckClick() {
    setShowHealthCheck(false)
  }

  return (
    <PageLayout title="Home">
      <h1>
        Above and Beyond{' '}
        <span role="img" aria-label="Eld emoji">
          🔥
        </span>
      </h1>

      <PrimaryButton onClick={onShowHealthCheckClick}>
        Gör en check in
      </PrimaryButton>

      {showHealthCheck && (
        <HealthCheckDialog onClose={onCloseHealthCheckClick} />
      )}

      {/* <Link to="/report">Gör en själv-rapport</Link> */}

      {/* <Chart
        dataKey="temp"
        data={[{ temp: 36 }, { temp: 37 }, { temp: 37 }, { temp: 38 }]}
      /> */}
    </PageLayout>
  )
}
