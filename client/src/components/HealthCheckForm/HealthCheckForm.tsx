import React from 'react'

import ConversationForm from '../_conversation-form/ConversationForm'

import BodyTemperatureQuestion from './_steps/BodyTemperatureQuestion'
import BreathingProblemQuestion from './_steps/BreathingProblemQuestion'
import CoronaContactQuestion from './_steps/CoronaContactQuestion'
import CoughQuestion from './_steps/CoughQuestion'
import EnergyQuestion from './_steps/EnergyQuestion'

interface HealthCheckFormProps {
  onResult: (values: Record<string, any>) => void
}

export default function HealthCheckForm({ onResult }: HealthCheckFormProps) {
  return (
    <ConversationForm title="Fill in your health check" onResult={onResult}>
      <CoughQuestion />
      <BreathingProblemQuestion />
      <EnergyQuestion />
      <CoronaContactQuestion />

      <BodyTemperatureQuestion />
    </ConversationForm>
  )
}
