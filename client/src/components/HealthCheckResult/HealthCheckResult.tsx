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
    return <div>You are not coughing. All good and healthy</div>
  }

  if (coughResult === CoughAnswers.Sometimes) {
    return <div>You are coughing sometimes. Take some care</div>
  }

  if (coughResult === CoughAnswers.Often) {
    return <div>You cough often. Call 1177</div>
  }

  if (coughResult === CoughAnswers.AllTheTime) {
    return <div>You cough all the time. Call 112</div>
  }
}
