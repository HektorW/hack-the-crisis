import React from 'react'

import { CoughAnswers } from '../../../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../../../enums/HealthCheckNames'
import ConversationFormRadioQuestion from '../../../_conversation-form/ConversationFormRadioQuestion'

export default function CoughQuestion() {
  return (
    <ConversationFormRadioQuestion<CoughAnswers>
      name={HealthCheckNames.Coughing}
      heading="Have you recently started to cough?"
      options={[
        { text: 'No', value: CoughAnswers.No },
        { text: 'Yes, sometimes', value: CoughAnswers.Sometimes },
        { text: 'Yes, often', value: CoughAnswers.Often },
        { text: 'Yes, all the time', value: CoughAnswers.AllTheTime }
      ]}
    />
  )
}
