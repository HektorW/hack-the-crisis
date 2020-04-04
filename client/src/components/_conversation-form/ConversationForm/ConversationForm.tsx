import React, { useState } from 'react'

import PrimaryButton from '../../_buttons/PrimaryButton'
import SecondaryButton from '../../_buttons/SecondaryButton'

import ConversationFormContext from './ConversationForm.context'

import './conversation-form.scss'
import ProgressBar from '../../ProgressBar'

interface ConversationFormProps {
  nextLabel?: string
  previousLabel?: string
  viewResultLabel?: string

  children: React.ReactNode

  onResult: (values: Record<string, any>) => void
}

export default function ConversationForm({
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

  function setQuestionValue(name: string, value: any) {
    if (questionValues[name] !== value) {
      setQuestionValues({ ...questionValues, [name]: value })
    }

    const isValidValue = value !== null && value !== undefined && value !== ''
    if (isValidValue !== isActiveQuestionValid) {
      setIsActiveQuestionValid(isValidValue)
    }
  }

  function onPreviousClick() {
    setActiveIndex(Math.max(0, activeIndex - 1))
  }

  function onNextClick() {
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

      <div className="conversation-form__question">
        <ConversationFormContext.Provider
          value={{ values: questionValues, setQuestionValue }}
        >
          {activeQuestion}
        </ConversationFormContext.Provider>
      </div>

      <div className="conversation-form__buttons">
        {activeIndex > 0 && (
          <SecondaryButton
            className="conversation-form__previous"
            onClick={onPreviousClick}
          >
            {previousLabel}
          </SecondaryButton>
        )}

        <PrimaryButton
          className="conversation-form__next"
          disabled={!isActiveQuestionValid}
          onClick={onNextClick}
        >
          {isLastQuestion ? viewResultLabel : nextLabel}
        </PrimaryButton>
      </div>
    </div>
  )
}
