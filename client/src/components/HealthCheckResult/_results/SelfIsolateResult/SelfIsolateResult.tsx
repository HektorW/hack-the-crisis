import React from 'react'

import {
  CoughAnswers,
  BreathingProblemAnsers,
  EnergyAnswers,
  CoronaContactAnswers
} from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import { answerToText } from '../../../../utils/answerToText'
import { questionNameToText } from '../../../../utils/nameToText'

import './self-isolate-result.scss'

interface SelfIsolateResultProps {
  result: Record<string, any>
}

export default function SelfIsolateResult({
  result = {}
}: SelfIsolateResultProps) {
  const displayResults = Object.keys(result).filter(key => {
    const value = result[key]

    switch (key) {
      case HealthCheckNames.Coughing:
        return value > CoughAnswers.No
      case HealthCheckNames.BreathingProblem:
        return value > BreathingProblemAnsers.No
      case HealthCheckNames.Energy:
        return value > EnergyAnswers.Tired
      case HealthCheckNames.CoronaContact:
        return value > CoronaContactAnswers.No
      case HealthCheckNames.BodyTemperature:
        return value > 37.5
    }

    return false
  })

  return (
    <div>
      <h2 style={{ maxWidth: 200 }}>Self isolate at home</h2>

      <img src="/stay-home-result.png" />

      <h3>Your symptons</h3>
      <ul>
        {displayResults.map(key => (
          <li key={key}>{answerToText(key, result[key])}</li>
        ))}
      </ul>
    </div>
  )
}
