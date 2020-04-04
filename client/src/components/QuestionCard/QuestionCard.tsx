import React from 'react'

import './question-card.scss'

interface QuestionCardProps {
  name: string
  text: string

  options: Option[]
  value?: string

  onChange?: (value: string) => void
}

interface Option {
  text: string
  value: string
}

export default function QuestionCard({
  name,

  text,

  options,
  value,

  onChange
}: QuestionCardProps) {
  return (
    <fieldset className="question-card">
      <legend className="question-card__text">{text}</legend>

      <ul className="question-card__list">
        {options.map(option => {
          const optionId = `${name}-${option.value}`

          return (
            <li key={option.value} className="question-card__option">
              <label className="question-card__option-label" htmlFor={optionId}>
                <input
                  className="question-card__option-input"
                  type="radio"
                  id={optionId}
                  name={name}
                  value={option.value}
                  required
                  onChange={() => onChange?.(value)}
                />

                <span className="question-card__option-text">
                  {option.text}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </fieldset>
  )
}
