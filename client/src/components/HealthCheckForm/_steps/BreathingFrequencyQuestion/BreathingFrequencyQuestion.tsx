import React from 'react'

import HealthCheckNames from '../../../../enums/HealthCheckNames'
import TimedCountingQuestion from '../../../_conversation-form/TimedCountingQuestion'

export default function BreathingFrequencyQuestion() {
  return (
    <TimedCountingQuestion
      heading="Determining breathing frequency"
      name={HealthCheckNames.BreathingFrequency}
      inputPlaceholder="Enter your breathing frequenecy"
    >
      <p>1. Try to be as relaxed as possible</p>

      <p>
        2. Find your pulse
        <small>
          Usually the pulse is strongest on the inside of the wrist.
        </small>
      </p>

      <p>
        3. Count beats
        <small>
          Start counting your heart beats while the stopwatch is running.
        </small>
      </p>
    </TimedCountingQuestion>
  )
}
