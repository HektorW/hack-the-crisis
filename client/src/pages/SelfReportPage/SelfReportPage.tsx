import React from 'react'

import SelfReport from '../../components/SelfReport'
import PageLayout from '../../components/_layouts/PageLayout'

interface SelfReportPageProps {}

export default function SelfReportPage({}: SelfReportPageProps) {
  return (
    <PageLayout title="Själv-rapport">
      <SelfReport />
    </PageLayout>
  )
}
