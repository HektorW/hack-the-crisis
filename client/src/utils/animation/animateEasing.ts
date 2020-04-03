import { easeInOutCubic } from './easings'

const { performance, requestAnimationFrame, cancelAnimationFrame } = window

export interface OngoingAnimation {
  promise: Promise<boolean>
  stop: () => void
}

interface AnimateEasingOptions {
  duration: number
  easing?: (t: number) => number
}

export default function animateEasing(
  { duration, easing = easeInOutCubic }: AnimateEasingOptions,
  tickCallback: (t: number) => void
): OngoingAnimation {
  let _resolve: (didFinish: boolean) => void
  const promise = new Promise<boolean>(resolve => {
    _resolve = resolve
  })

  let rafID: number = -1
  const start = performance.now()
  ;(function update() {
    const elapsed = performance.now() - start

    if (elapsed >= duration) {
      tickCallback(1)
      _resolve!(true)
    } else {
      rafID = requestAnimationFrame(update)

      const t = Math.min(easing(elapsed / duration), 1)
      tickCallback(t)
    }
  })()

  return {
    promise,
    stop: () => {
      _resolve(false)
      cancelAnimationFrame(rafID)
    }
  }
}
