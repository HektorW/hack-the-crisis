import React from 'react'

import { CoronaContactAnswers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function CoronaContactQuestion() {
  return (
    <ConversationFormRadioQuestion<CoronaContactAnswers>
      name={HealthCheckNames.CoronaContact}
      heading="Have you been in contact with someone with Corona?"
      options={[
        { text: 'No', value: CoronaContactAnswers.No },
        { text: 'Yes', value: CoronaContactAnswers.Yes },
        { text: "Don't know", value: CoronaContactAnswers.DontKnow }
      ]}
    />
  )
}
