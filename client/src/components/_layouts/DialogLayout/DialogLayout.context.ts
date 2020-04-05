import { createContext } from 'react'

export interface DialogLayoutContextValue {
  closeDialog: () => void
}

const DialogLayoutContext = createContext<DialogLayoutContextValue | null>(null)

export default DialogLayoutContext
