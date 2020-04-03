import { useEffect } from 'react'

export default function useOnUnmount(fn: () => void) {
  useEffect(() => fn, []) // eslint-disable-line react-hooks/exhaustive-deps
}
