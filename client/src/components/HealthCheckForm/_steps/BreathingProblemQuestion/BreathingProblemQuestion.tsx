import React from 'react'

import { BreathingProblemAnsers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function BreathingProblemQuestion() {
  return (
    <ConversationFormRadioQuestion<BreathingProblemAnsers>
      name={HealthCheckNames.BreathingProblem}
      heading="Do you experience breathing problems?"
      options={[
        { text: 'No', value: BreathingProblemAnsers.No },
        {
          text:
            'Yes, I get shortness of breath with light effort but not at rest',
          value: BreathingProblemAnsers.LightEffort
        },
        {
          text: 'I feel a certain shortness of breath during rest',
          value: BreathingProblemAnsers.SomeEffort
        },
        {
          text: 'I have shortness of breath all the time',
          value: BreathingProblemAnsers.LargeEffort
        }
      ]}
    />
  )
}
