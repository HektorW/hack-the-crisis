import React from 'react'

import './health-check-result.scss'
import { CoughAnswers } from '../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../enums/HealthCheckNames'

interface HealthCheckResultProps {
  result: Record<string, any>
}

export default function HealthCheckResult({ result }: HealthCheckResultProps) {
  const coughResult = result[HealthCheckNames.Coughing]

  if (coughResult === CoughAnswers.No) {
    return <div>All good and healthy</div>
  }

  if (coughResult === CoughAnswers.Sometimes) {
    return <div>Take some care</div>
  }

  if (coughResult === CoughAnswers.Often) {
    return <div>Call 1177</div>
  }

  if (coughResult === CoughAnswers.AllTheTime) {
    return <div>Call 112</div>
  }
}
