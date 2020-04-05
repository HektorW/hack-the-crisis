import { useContext } from 'react'

import DialogLayoutContext from './DialogLayout.context'

export function useCloseDialog() {
  const context = useContext(DialogLayoutContext)

  return function closeDialog() {
    context?.closeDialog()
  }
}
