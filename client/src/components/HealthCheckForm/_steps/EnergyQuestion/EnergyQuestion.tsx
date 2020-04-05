import React from 'react'

import { EnergyAnswers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function EnergyQuestion() {
  return (
    <ConversationFormRadioQuestion<EnergyAnswers>
      name={HealthCheckNames.Energy}
      heading="How is your general energy?"
      options={[
        { text: 'As usual', value: EnergyAnswers.AsUsual },
        { text: 'Tired but able to get up', value: EnergyAnswers.Tired },
        {
          text: 'Mostly bedridden but can be up longer',
          value: EnergyAnswers.SomewhatBed
        },
        {
          text: 'Can only lie in bed, but can go to the toilet',
          value: EnergyAnswers.MostlyBed
        },
        { text: "Don't get out of bed", value: EnergyAnswers.StuckInBed }
      ]}
    />
  )
}
