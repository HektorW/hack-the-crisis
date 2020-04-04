import React, { useState } from 'react'

import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormQuestion from '../../../_conversation-form/ConversationFormQuestion'

import './body-temperature-question.scss'

export default function BodyTemperatureQuestion() {
  const [temperature, setTemperature] = useState(38)

  const min = 35
  const max = 40
  const delta = ((temperature - min) / (max - min)) * 100

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = parseFloat(event.currentTarget.value)
    if (!isNaN(inputValue)) {
      setTemperature(inputValue)
    }
  }

  return (
    <ConversationFormQuestion
      className="body-temperature"
      name={HealthCheckNames.BodyTemperature}
      heading="Enter your body temperature"
      value={temperature}
    >
      <div className="body-temperature__range-container">
        <input
          className="body-temperature__input"
          type="range"
          step={0.1}
          min={min}
          max={max}
          value={temperature}
          onChange={onInputChange}
        />

        <div
          className="body-temperature__value"
          style={{ left: `${Math.min(92, Math.max(8, delta))}%` }}
        >
          {temperature}°C
        </div>
      </div>

      <div className="body-temperature__legend">
        <div className="body-temperature__min">&lt; {min}°C</div>
        <div className="body-temperature__max">&gt; {max}°C</div>
      </div>
    </ConversationFormQuestion>
  )
}
