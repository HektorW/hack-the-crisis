import React, { useState } from 'react'

import ProgressBar from '../../ProgressBar'
import PrimaryButton from '../../_buttons/PrimaryButton'
import RoundButton from '../../_buttons/RoundButton'
import LeftArrow from '../../_svg/LeftArrow'

import ConversationFormContext from './ConversationForm.context'

import './conversation-form.scss'
import useKeyPressHandler from '../../../hooks/useKeyPressHandler'
import HealthCheckNames from '../../../enums/HealthCheckNames'

const NEXT_KEYS = ['13', 'Enter', '39', 'ArrowRight'];
const PREV_KEYS = ['8', 'Backspace', '37', 'ArrowLeft'];

interface ConversationFormProps {
  title?: string

  nextLabel?: string
  previousLabel?: string
  viewResultLabel?: string

  children: React.ReactNode

  onResult: (values: Record<string, any>) => void
}

export default function ConversationForm({
  title,

  nextLabel = 'Next',
  previousLabel = 'Previous',
  viewResultLabel = 'View result',

  children,

  onResult
}: ConversationFormProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isActiveQuestionValid, setIsActiveQuestionValid] = useState(false)
  const [questionValues, setQuestionValues] = useState<Record<string, any>>({})

  const childrenArray = React.Children.toArray(children)
  const questionCount = childrenArray.length

  const isLastQuestion = activeIndex >= questionCount - 1
  const activeQuestion = childrenArray[activeIndex]


  function onKeyPressHandler({ key }) {
    if (NEXT_KEYS.includes(String(key))) {
      onNextClick();
    }
    if (PREV_KEYS.includes(String(key))) {
      onPreviousClick();
    }
  }
  useKeyPressHandler('keydown', onKeyPressHandler);

  function setQuestionValue(name: HealthCheckNames, value: any) {
    if (questionValues[name] !== value) {
      setQuestionValues({ ...questionValues, [name]: value })
    }

    const isValidValue = value !== null && value !== undefined && value !== ''
    if (isValidValue !== isActiveQuestionValid) {
      setIsActiveQuestionValid(isValidValue)
    }
  }

  function onPreviousClick() {
    if(activeIndex === 0) {
      return
    }
    setActiveIndex(Math.max(0, activeIndex - 1))
  }

  function onNextClick() {
    if(!isActiveQuestionValid) {
      return
    }
    if (isLastQuestion) {
      onResult(questionValues)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <div className="conversation-form">
      <ProgressBar
        className="conversation-form__progress"
        max={questionCount + 1}
        current={activeIndex + 1}
      />

      {title && <h2 className="conversation-form__title">{title}</h2>}

      <div className="conversation-form__question-index">
        {activeIndex + 1}/{questionCount}
      </div>

      <div className="conversation-form__question">
        <ConversationFormContext.Provider
          value={{ values: questionValues, setQuestionValue }}
        >
          {activeQuestion}
        </ConversationFormContext.Provider>
      </div>

      <div className="conversation-form__buttons">
        {activeIndex > 0 && (
          <RoundButton
            className="conversation-form__previous"
            onClick={onPreviousClick}
          >
            <LeftArrow className="conversation-form__previous-icon" />
          </RoundButton>
        )}

        <PrimaryButton
          className="conversation-form__next"
          disabled={!isActiveQuestionValid}
          onClick={onNextClick}
        >
          {isLastQuestion ? viewResultLabel : nextLabel}
          <LeftArrow className="conversation-form__next-icon" />
        </PrimaryButton>
      </div>
    </div>
  )
}
