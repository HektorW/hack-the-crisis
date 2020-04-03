import { useEffect, EffectCallback } from 'react'

export default function useOnMount(fn: EffectCallback) {
  useEffect(fn, [])
}
