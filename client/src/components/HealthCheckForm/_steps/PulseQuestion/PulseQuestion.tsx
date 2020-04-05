import React from 'react'

import HealthCheckNames from '../../../../enums/HealthCheckNames'
import TimedCountingQuestion from '../../../_conversation-form/TimedCountingQuestion'

import './pulse-question.scss'

export default function PulseQuestion() {
  return (
    <TimedCountingQuestion
      heading="Determining Heart Rate"
      resultHeading="How many heart beats did you get?"
      name={HealthCheckNames.Pulse}
      inputPlaceholder="Enter your heart beats"
      resultText="Now enter your pulse"
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
