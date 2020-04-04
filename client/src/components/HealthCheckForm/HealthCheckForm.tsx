import React from 'react'

import ConversationForm from '../_conversation-form/ConversationForm'

import BreathingProblemQuestion from './_steps/BreathingProblemQuestion'
import CoughQuestion from './_steps/CoughQuestion'

interface HealthCheckFormProps {
  onResult: (values: Record<string, any>) => void
}

export default function HealthCheckForm({ onResult }: HealthCheckFormProps) {
  return (
    <ConversationForm onResult={onResult}>
      <CoughQuestion />
      <BreathingProblemQuestion />
    </ConversationForm>
  )
}
