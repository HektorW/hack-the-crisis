import React from 'react'

import styles from './question-card.scss'

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
    <fieldset>
      <legend>{text}</legend>

      {options.map(option => {
        const optionId = `${name}-${option.value}`

        return (
          <div key={option.value}>
            <input
              type="radio"
              id={optionId}
              name={name}
              value={option.value}
              required
              onChange={() => onChange?.(value)}
            />

            <label htmlFor={optionId}>{option.text}</label>
          </div>
        )
      })}
    </fieldset>
  )
}
