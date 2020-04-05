import React from 'react'

import HealthCheckNames from '../../../../enums/HealthCheckNames'
import TimedCountingQuestion from '../../../_conversation-form/TimedCountingQuestion'

export default function BreathingFrequencyQuestion() {
  return (
    <TimedCountingQuestion
      heading="Determining breathing frequency"
      name={HealthCheckNames.BreathingFrequency}
      inputPlaceholder="Enter number of breaths"
    >
      <p>1. Try to be as relaxed as possible</p>

      <p>
        2. Count breaths
        <small>
          Start counting your breaths while the stopwatch is running.
        </small>
      </p>
    </TimedCountingQuestion>
  )
}
