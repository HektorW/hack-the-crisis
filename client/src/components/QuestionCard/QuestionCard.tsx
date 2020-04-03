import React from 'react'

import styles from './question-card.scss'

interface QuestionCardProps {
  text: string

  options: Option[]
  value: string

  onChange: (value: string) => void
}

interface Option {
  text: string
  value: string
}

export default function QuestionCard({}: QuestionCardProps) {}
