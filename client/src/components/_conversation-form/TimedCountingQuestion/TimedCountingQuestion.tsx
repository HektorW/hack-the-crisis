import React, { useState } from 'react'

import SecondaryButton from '../../_buttons/SecondaryButton'
import AutomaticTimer from '../../_timers/CountdownTimer'
import RoundTimer from '../../_timers/RoundTimer'
import ConversationFormQuestion from '../ConversationFormQuestion'
import { ConversationFormQuestionProps } from '../ConversationFormQuestion/ConversationFormQuestion'

import './timed-counting-question.scss'

interface TimedCountingQuestionProps
  extends Omit<ConversationFormQuestionProps, 'value'> {
  inputPlaceholder?: string
}

export default function TimedCountingQuestion({
  inputPlaceholder = '',

  children,

  ...questionProps
}: TimedCountingQuestionProps) {
  const [hasStarted, setHasStarted] = useState(false)
  const [isCountdownFinished, setIsCountdownFinished] = useState(false)
  const [isTimerFinished, setIsTimerFinished] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [numberValue, setNumberValue] = useState(0)

  const shouldShowStart = !hasStarted
  const shouldShowCountdown = hasStarted && !isCountdownFinished
  const shouldShowTimer = hasStarted && isCountdownFinished && !isTimerFinished
  const shouldShowRestart = hasStarted && isCountdownFinished && isTimerFinished

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const elementValue = event.currentTarget.value

    setInputValue(elementValue)

    const numberValue = parseInt(event.currentTarget.value, 10)
    if (!isNaN(numberValue)) {
      setNumberValue(numberValue)
    }
  }

  function onStartClick() {
    setHasStarted(true)
    setIsCountdownFinished(false)
    setIsTimerFinished(false)
  }

  function onCountdownFinish() {
    setIsCountdownFinished(true)
  }

  function onTimerFinish() {
    setIsTimerFinished(true)
  }

  return (
    <ConversationFormQuestion
      className="timed-counting-question"
      value={numberValue === 0 ? null : numberValue}
      {...questionProps}
    >
      <input
        className="timed-counting-question__input"
        type="number"
        placeholder={inputPlaceholder}
        value={inputValue}
        step={1}
        min={0}
        onChange={onInputChange}
      />

      <div className="timed-counting-question__description">{children}</div>

      <div className="timed-counting-question__timers">
        {shouldShowStart && (
          <SecondaryButton onClick={onStartClick}>Start test</SecondaryButton>
        )}

        {shouldShowCountdown && (
          <AutomaticTimer timeS={5} onDone={onCountdownFinish} />
        )}

        {shouldShowTimer && (
          <RoundTimer timeS={30} autoStart onDone={onTimerFinish} />
        )}

        {shouldShowRestart && (
          <SecondaryButton onClick={onStartClick}>
            Restart timer
          </SecondaryButton>
        )}
      </div>
    </ConversationFormQuestion>
  )
}
