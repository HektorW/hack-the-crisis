import React from 'react'
import { Link } from 'react-router-dom'

import PageLayout from '../../../components/_layouts/PageLayout'

export default function NotFound() {
  return (
    <PageLayout>
      <p>Den här sidan kunde inte hittas.</p>

      <p>
        <Link to="/">Gå tillbaka till startsidan</Link>
      </p>
    </PageLayout>
  )
}
