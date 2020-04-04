import classNames from 'classnames'
import React from 'react'

import { useSyncFormQuestionValue } from './ConversationFormQuestion.hooks'

import './conversation-form-question.scss'

export interface ConversationFormQuestionProps {
  name: string
  value: any

  heading: string

  className?: string
  children: React.ReactNode
}

export default function ConversationFormQuestion({
  name,
  value,

  heading,

  className,
  children
}: ConversationFormQuestionProps) {
  useSyncFormQuestionValue(name, value)

  return (
    <div className={classNames('conversation-form-question', className)}>
      <h3 className="conversation-form-question__heading">{heading}</h3>

      <div className="conversation-form-question__content">{children}</div>
    </div>
  )
}
