import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { Link, useHistory } from 'react-router-dom'

import Card from '../../components/Card'
import Chart from '../../components/Chart'
import HealthCheckDialog from '../../components/HealthCheckDialog'
import PrimaryButton from '../../components/_buttons/PrimaryButton'
import SecondaryButton from '../../components/_buttons/SecondaryButton'
import PageLayout from '../../components/_layouts/PageLayout'
import Account from '../../components/_svg/Account'
import { useGetUser } from '../../hooks/useGetUser'

import './welcome-page.scss'

export default function WelcomePage() {
  const user = useGetUser()
  const firebase = useFirebase()

  const [showHealthCheck, setShowHealthCheck] = useState(false)

  const isSignedIn = !user.isAnonymous && !user.isEmpty

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }

  function onShowHealthCheckClick() {
    setShowHealthCheck(true)
  }

  function onCloseHealthCheckClick() {
    setShowHealthCheck(false)
  }

  return (
    <PageLayout title="Home" className="welcome-page">
      {!isSignedIn && (
        <PrimaryButton
          className="welcome-page__login"
          onClick={loginWithGoogle}
        >
          Please login
        </PrimaryButton>
      )}

      {isSignedIn && (
        <>
          <div className="welcome-page__header">
            <div className="welcome-page__account-container">
              {user.photoURL ? (
                <img src={user.photoURL} />
              ) : (
                <Account className="welcome-page__account-icon" />
              )}
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

          <div>
            <Card>Some content</Card>
          </div>

          {showHealthCheck && (
            <HealthCheckDialog onClose={onCloseHealthCheckClick} />
          )}
        </>
      )}
    </PageLayout>
  )
}
