import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Chart from '../../components/Chart'
import HealthCheckDialog from '../../components/HealthCheckDialog'
import PrimaryButton from '../../components/_buttons/PrimaryButton'
import SecondaryButton from '../../components/_buttons/SecondaryButton'
import PageLayout from '../../components/_layouts/PageLayout'
import { useGetUser } from '../../hooks/useGetUser'

import './welcome-page.scss'
import Account from '../../components/_svg/Account'

export default function WelcomePage() {
  const user = useGetUser()
  const [showHealthCheck, setShowHealthCheck] = useState(false)

  const isSignedIn = !user.isAnonymous && !user.isEmpty

  function onShowHealthCheckClick() {
    setShowHealthCheck(true)
  }

  function onCloseHealthCheckClick() {
    setShowHealthCheck(false)
  }

  return (
    <PageLayout title="Home" className="welcome-page">
      {!isSignedIn && <div>You have to login</div>}

      <div className="welcome-page__header">
        <div className="welcome-page__account-container">
          <Account className="welcome-page__account-icon" />
        </div>
      </div>

      <div className="welcome-page__greeting">Hi {user.displayName}!</div>

      <h2 className="welcome-page__headline">
        It's time for your daily check-in
      </h2>

      <SecondaryButton
        className="welcome-page__check-in"
        onClick={onShowHealthCheckClick}
      >
        Start check-in
      </SecondaryButton>

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
