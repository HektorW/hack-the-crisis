import React from 'react'

import { EnergyAnswers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function EnergyQuestion() {
  return (
    <ConversationFormRadioQuestion<EnergyAnswers>
      name={HealthCheckNames.Energy}
      heading="How is your energy?"
      options={[
        { text: 'As usual', value: EnergyAnswers.AsUsual },
        { text: 'Tired but ok', value: EnergyAnswers.Tired },
        { text: 'Somewhat bed', value: EnergyAnswers.SomewhatBed },
        { text: 'Mostly bed', value: EnergyAnswers.MostlyBed },
        { text: 'Stuck in bed', value: EnergyAnswers.StuckInBed }
      ]}
    />
  )
}
