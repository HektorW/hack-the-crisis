import React, { useState } from 'react'

import ConversationFormQuestion from '../ConversationFormQuestion'
import { ConversationFormQuestionProps } from '../ConversationFormQuestion/ConversationFormQuestion'
import { usePreviousValueOnMount } from '../ConversationFormQuestion/ConversationFormQuestion.hooks'

import './conversation-form-radio-question.scss'

interface ConversationFormRadioQuestionProps<T>
  extends Omit<ConversationFormQuestionProps, 'value' | 'children'> {
  options: Option<T>[]
}

interface Option<T> {
  text: string
  value: T
}

export default function ConversationFormRadioQuestion<T = any>({
  name,

  options,

  ...questionProps
}: ConversationFormRadioQuestionProps<T>) {
  const defaultValue = usePreviousValueOnMount<T>(name)

  const [selectedValue, setSelectedValue] = useState<T | null>(defaultValue)

  return (
    <ConversationFormQuestion
      name={name}
      value={selectedValue}
      {...questionProps}
    >
      <ul className="radio-question__list">
        {options.map(option => {
          const optionId = `${name}-${option.value}`

          return (
            <li key={option.value} className="radio-question__option">
              <label
                className="radio-question__option-label"
                htmlFor={optionId}
              >
                <input
                  className="radio-question__option-input"
                  type="radio"
                  id={optionId}
                  name={name}
                  value={String(option.value)}
                  checked={selectedValue === option.value}
                  required
                  onChange={() => setSelectedValue(option.value)}
                  onFocus={() => setSelectedValue(option.value)}
                />

                <span className="radio-question__option-text">
                  {option.text}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </ConversationFormQuestion>
  )
}
