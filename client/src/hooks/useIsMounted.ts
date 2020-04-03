import { useState } from 'react'

import useOnMount from './useOnMount'

const { requestAnimationFrame, cancelAnimationFrame } = window

export default function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useOnMount(() => {
    const rafId = requestAnimationFrame(() => setIsMounted(true))
    return () => cancelAnimationFrame(rafId)
  })

  return isMounted
}
