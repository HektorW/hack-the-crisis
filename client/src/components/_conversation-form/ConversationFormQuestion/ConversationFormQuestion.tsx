import classNames from 'classnames'
import React from 'react'

import { useSyncFormQuestionValue } from './ConversationFormQuestion.hooks'

import './conversation-form-question.scss'
import HealthCheckNames from '../../../enums/HealthCheckNames'
import { useGetSelfReports } from '../../../hooks/selfReportsHooks'
import { answerToText } from '../../../utils/answerToText'

export interface ConversationFormQuestionProps {
  name: HealthCheckNames
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

  const reports = useGetSelfReports(name)

  return (
    <div className={classNames('conversation-form-question', className)}>
      <h3 className="conversation-form-question__heading">{heading}</h3>

      <div className="conversation-form-question__content">{children}</div>

      {reports && reports.length > 0 && (
        <div className="conversation-form-question__recent">
          Last report:{' '}
          <span>{reports[reports.length - 1].answeredDate.split('T')[0]}</span>{' '}
          <br />
          <h2>{answerToText(name, reports[reports.length - 1].answerId)}</h2>
        </div>
      )}
    </div>
  )
}
