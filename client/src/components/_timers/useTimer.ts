import { useState, useEffect, useRef } from 'react'

export default function useTimer(timeS: number, onDone: () => void) {
  const timeMs = timeS * 1000

  const [isRunning, setIsRunning] = useState(false)
  const [currentTimeMs, setCurrentTime] = useState(timeMs)

  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  const progress = currentTimeMs / timeMs

  const isFinished = currentTimeMs === 0

  useEffect(() => {
    if (!isRunning) {
      return
    }

    let startTime = currentTimeMs

    if (currentTimeMs === 0) {
      startTime = timeMs
      setCurrentTime(timeMs)
    }

    const startNow = Date.now()

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startNow
      const updatedTime = Math.max(0, startTime - elapsed)
      setCurrentTime(updatedTime)

      if (updatedTime === 0) {
        setIsRunning(false)
        onDoneRef.current()
      }
    }, 25)

    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning])

  function start() {
    setIsRunning(true)
  }

  function stop() {
    setIsRunning(false)
  }

  function toggle() {
    setIsRunning(!isRunning)
  }

  function restart() {
    setCurrentTime(timeMs)
    setIsRunning(true)
  }

  return {
    isRunning,
    isFinished,
    currentTimeMs,
    progress,
    start,
    stop,
    toggle,
    restart
  }
}
