import React from 'react'

import { CoughAnswers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function CoughQuestion() {
  return (
    <ConversationFormRadioQuestion<CoughAnswers>
      name={HealthCheckNames.Coughing}
      heading="Have you recently started coughing?"
      options={[
        { text: 'No', value: CoughAnswers.No },
        { text: 'Sometimes', value: CoughAnswers.Sometimes },
        { text: 'Often', value: CoughAnswers.Often },
        { text: 'All the time', value: CoughAnswers.AllTheTime }
      ]}
    />
  )
}
