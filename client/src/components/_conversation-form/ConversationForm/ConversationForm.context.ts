import { createContext } from 'react'
import HealthCheckNames from '../../../enums/HealthCheckNames'

export interface ConversationFormContextValue {
  values: Record<string, any>
  setQuestionValue: (name: HealthCheckNames, value: any) => void
}

const ConversationFormContext = createContext<ConversationFormContextValue | null>(
  null
)

export default ConversationFormContext
