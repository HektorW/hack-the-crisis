import React, { useState } from 'react'

import './pulse-question.scss'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import Timer from '../../../Timer'
import ConversationFormQuestion from '../../../_conversation-form/ConversationFormQuestion'

export default function PulseQuestion() {
  const [isTimerFinished, setIsTimerFinished] = useState(false)
  const [pulse, setPulse] = useState<number | null>(null)

  function onPulseChange(event: React.ChangeEvent<HTMLInputElement>) {
    const elementValue = parseInt(event.currentTarget.value, 10)
    if (!isNaN(elementValue)) {
      setPulse(elementValue)
    }
  }

  function onDoTimerAgain() {
    setIsTimerFinished(false)
  }

  function onTimerDone() {
    setPulse(0)
    setIsTimerFinished(true)
  }

  return (
    <ConversationFormQuestion
      className="pulse-question"
      name={HealthCheckNames.Pulse}
      heading={
        isTimerFinished ? 'Enter Your Pulse Count' : 'Determining Heart Rate'
      }
      value={pulse}
    >
      {isTimerFinished && (
        <>
          <input
            className="pulse-question__input"
            type="number"
            placeholder="Pulse"
            value={pulse!}
            step={1}
            min={0}
            onChange={onPulseChange}
          />

          <button onClick={onDoTimerAgain}>Try again</button>
        </>
      )}

      {!isTimerFinished && (
        <>
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

          <Timer
            className="pulse-question__timer"
            timeMs={30 * 1000}
            onDone={onTimerDone}
          />
        </>
      )}
    </ConversationFormQuestion>
  )
}
