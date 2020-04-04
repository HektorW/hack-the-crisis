import React from 'react'

import { BreathingProblemAnsers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function BreathingProblemQuestion() {
  return (
    <ConversationFormRadioQuestion<BreathingProblemAnsers>
      name={HealthCheckNames.BreathingProblem}
      heading="Do you have trouble breathing?"
      options={[
        { text: 'No', value: BreathingProblemAnsers.No },
        { text: 'Light effort', value: BreathingProblemAnsers.LightEffort },
        { text: 'Some effort', value: BreathingProblemAnsers.SomeEffort },
        { text: 'Large effort', value: BreathingProblemAnsers.LargeEffort }
      ]}
    />
  )
}
