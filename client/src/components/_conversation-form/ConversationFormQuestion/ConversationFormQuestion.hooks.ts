import { useContext, useRef, useEffect } from 'react'

import ConversationFormContext from '../ConversationForm/ConversationForm.context'

export function usePreviousValueOnMount<T>(name: string): T | null {
  const context = useContext(ConversationFormContext)
  const valueOnMountRef = useRef((context?.values[name] as T) ?? null)

  return valueOnMountRef.current
}

export function useSyncFormQuestionValue(name: string, value: any) {
  const context = useContext(ConversationFormContext)

  const _updateValueRef = useRef(context?.setQuestionValue)
  _updateValueRef.current = context?.setQuestionValue

  useEffect(() => {
    _updateValueRef.current(name, value)
  }, [name, value])
}

export function useGoToNextRef() {
  const context = useContext(ConversationFormContext)
  const goToNextRef = useRef(context.goToNext)
  goToNextRef.current = context.goToNext

  return goToNextRef
}
