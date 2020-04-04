import { createContext } from 'react'

export interface ConversationFormContextValue {
  values: Record<string, any>
  setQuestionValue: (name: string, value: any) => void
}

const ConversationFormContext = createContext<ConversationFormContextValue | null>(
  null
)

export default ConversationFormContext
