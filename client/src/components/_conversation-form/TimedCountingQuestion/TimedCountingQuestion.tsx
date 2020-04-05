import React, { useState } from 'react'

import SecondaryButton from '../../_buttons/SecondaryButton'
import AutomaticTimer from '../../_timers/CountdownTimer'
import RoundTimer from '../../_timers/RoundTimer'
import ConversationFormQuestion from '../ConversationFormQuestion'
import { ConversationFormQuestionProps } from '../ConversationFormQuestion/ConversationFormQuestion'

import './timed-counting-question.scss'
import useHasQuery from '../../../hooks/useHasQuery'

interface TimedCountingQuestionProps
  extends Omit<ConversationFormQuestionProps, 'value'> {
  inputPlaceholder?: string
  resultHeading?: string
  resultText?: string
}

export default function TimedCountingQuestion({
  heading,

  inputPlaceholder = '',
  resultText,
  resultHeading,

  children,

  ...questionProps
}: TimedCountingQuestionProps) {
  const isFastVersion = useHasQuery('fast')

  const [hasStarted, setHasStarted] = useState(false)
  const [isCountdownFinished, setIsCountdownFinished] = useState(false)
  const [isTimerFinished, setIsTimerFinished] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [numberValue, setNumberValue] = useState(0)

  const shouldShowStart = !hasStarted
  const shouldShowCountdown = hasStarted && !isCountdownFinished
  const shouldShowTimer = hasStarted && !isTimerFinished
  const shouldShowInput = hasStarted && isCountdownFinished && isTimerFinished
  // const shouldShowRestart = hasStarted && isCountdownFinished && isTimerFinished

  const isTimerRunning = hasStarted && isCountdownFinished

  const renderHeading =
    shouldShowInput && resultHeading ? resultHeading : heading

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

  function onRestartClick() {
    setHasStarted(false)
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
      heading={renderHeading}
      value={numberValue === 0 ? null : numberValue}
      {...questionProps}
    >
      {shouldShowInput && (
        <>
          <input
            className="timed-counting-question__input"
            type="number"
            placeholder={inputPlaceholder}
            value={inputValue}
            step={1}
            min={0}
            onChange={onInputChange}
          />

          <SecondaryButton
            className="timed-counting-question__restart"
            onClick={onRestartClick}
          >
            Run again
          </SecondaryButton>
        </>
      )}

      {!shouldShowInput && (
        <>
          <div className="timed-counting-question__description">{children}</div>

          <div className="timed-counting-question__timers">
            {shouldShowStart && (
              <SecondaryButton onClick={onStartClick}>
                Start timer
              </SecondaryButton>
            )}

            {shouldShowCountdown && (
              <AutomaticTimer
                className="timed-counting-question__countdown-timer"
                timeS={isFastVersion ? 1 : 2}
                onDone={onCountdownFinish}
              />
            )}

            {shouldShowTimer && (
              <RoundTimer
                className="timed-counting-question__round-timer"
                timeS={isFastVersion ? 2 : 30}
                run={isTimerRunning}
                onDone={onTimerFinish}
              />
            )}

            {/* {shouldShowRestart && (
              <>
                {resultText && (
                  <p className="timed-counting-question__result-text">
                    {resultText}
                  </p>
                )}

                <SecondaryButton onClick={onStartClick}>
                  Run timer again
                </SecondaryButton>
              </>
            )} */}
          </div>
        </>
      )}
    </ConversationFormQuestion>
  )
}
