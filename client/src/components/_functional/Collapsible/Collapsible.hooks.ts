import { useRef, MutableRefObject, useEffect } from 'react'

import useIsMounted from '../../../hooks/useIsMounted'
import useOnUnmount from '../../../hooks/useOnUnmount'
import { OngoingAnimation } from '../../../utils/animation/animateEasing'

import {
  getCurrentAnimationStyleValues,
  getTargetAnimationStyleValues,
  animateCollapseValues,
  setCollapsedValues,
  clearElementStyles
} from './Collapsible.utils'

export function useCollapsible(
  animationDuration: number,
  isCollapsed: boolean
): MutableRefObject<HTMLDivElement | null> {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<OngoingAnimation | null>(null)
  const isMounted = useIsMounted()

  useOnUnmount(() => {
    animationRef.current?.stop()
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    if (!isMounted) {
      clearElementStyles(element)

      if (isCollapsed) {
        setCollapsedValues(element)
      }

      return
    }

    animationRef.current?.stop()

    const currentValues = getCurrentAnimationStyleValues(element)
    const targetValues = getTargetAnimationStyleValues(element, isCollapsed)

    animationRef.current = animateCollapseValues(
      animationDuration,
      element,
      currentValues,
      targetValues
    )

    animationRef.current.promise.then(didFinish => {
      if (!didFinish) {
        return
      }

      clearElementStyles(element)

      if (isCollapsed) {
        setCollapsedValues(element)
      }
    })

    // Skip isMounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationDuration, isCollapsed])

  return elementRef
}
