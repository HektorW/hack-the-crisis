import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import ShakeScreen from '../../../components/_functional/ShakeScreen'
import PageLayout from '../../../components/_layouts/PageLayout'
import { getIsAuthenticated } from '../../../modules/authentication/authentication.selectors'

interface UnathorizedProps {}

export default function Unathorized({}: UnathorizedProps) {
  const isAuthenticated = useSelector(getIsAuthenticated)

  return (
    <PageLayout>
      <ShakeScreen />

      {isAuthenticated && <Link to="/">Go back to the start page</Link>}
    </PageLayout>
  )
}
