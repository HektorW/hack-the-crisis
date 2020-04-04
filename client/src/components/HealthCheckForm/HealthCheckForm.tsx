import React from 'react'

import ConversationForm from '../_conversation-form/ConversationForm'

import BreathingProblemQuestion from './_steps/BreathingProblemQuestion'
import CoronaContactQuestion from './_steps/CoronaContactQuestion'
import CoughQuestion from './_steps/CoughQuestion'
import EnergyQuestion from './_steps/EnergyQuestion'

interface HealthCheckFormProps {
  onResult: (values: Record<string, any>) => void
}

export default function HealthCheckForm({ onResult }: HealthCheckFormProps) {
  return (
    <ConversationForm onResult={onResult}>
      <CoughQuestion />
      <BreathingProblemQuestion />
      <EnergyQuestion />
      <CoronaContactQuestion />
    </ConversationForm>
  )
}
