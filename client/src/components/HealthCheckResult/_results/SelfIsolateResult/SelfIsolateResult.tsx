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
  showAdvice: boolean
  result: Record<string, any>
}

export default function SelfIsolateResult({
  showAdvice,
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
    <div className="self-isolate-result">
      <h2 style={{ maxWidth: 200 }}>Self isolate at home</h2>

      <img src="/stay-home-result.png" />

      {showAdvice && (
        <>
          <div className="self-isolate-result__advice">
            <div className="self-isolate-result__advice-index">1</div>

            <div className="self-isolate-result__advice-content">
              <h3 className="self-isolate-result__advice-title">
                Self-care in shortness of breath
              </h3>

              <p>
                Hopefully, this self-care advice can help you feel and get
                better. These measures can be carried out independently and can
                reduce the risk of complications in connection with illness
                affecting the respiratory tract, e.g. pneumonia.
              </p>

              <ul>
                <li>
                  Breathe in and let fresh cold air into the room and avoid
                  strong odors.
                </li>
                <li>
                  Breathe with your stomach (feel with your hand on your abdomen
                  that your stomach widens when you take a breath), which
                  improves the oxygenation.
                </li>
                <li>Wear comfortable, loose-fitting clothing.</li>
                <li>
                  Prioritize your oral care at least twice a day (tooth
                  brushing, mouthwash).
                </li>
              </ul>
            </div>
          </div>

          <div className="self-isolate-result__advice">
            <div className="self-isolate-result__advice-index">2</div>

            <div className="self-isolate-result__advice-content">
              <h3 className="self-isolate-result__advice-title">
                Self-care when having a fever
              </h3>

              <p>
                Hopefully, this self-care advice can help you feel and get
                better. Fever is when your body temperature is higher than
                usual, and varies from individual to individual.
              </p>

              <ul>
                <li>
                  Rest, as extensive movement and exercise can put stress on the
                  heart.
                </li>
                <li>
                  Drink plenty of water, re-hydration fluids or non-alcoholic
                  fluids, since fever can cause dehydration. Avoid caffeine.
                </li>
                <li>Adapt your clothing to if you are feeling cold or hot.</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {!showAdvice && (
        <>
          <h3>Your symptons</h3>
          <ul>
            {displayResults.map(key => (
              <li key={key}>{answerToText(key, result[key])}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
