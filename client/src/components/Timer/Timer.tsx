import classNames from 'classnames'
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'

import './timer.scss'
import SecondaryButton from '../_buttons/SecondaryButton'

interface TimerProps {
  timeMs: number

  className?: string

  onDone: () => void
}

export default function Timer({
  timeMs,

  className,

  onDone
}: TimerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(timeMs)

  const circleRef = useRef<SVGCircleElement>()
  const circlePathLengthRef = useRef(0)

  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  const progress = currentTime / timeMs

  useEffect(() => {
    circlePathLengthRef.current = circleRef.current.getTotalLength()
  })

  useEffect(() => {
    if (!isRunning) {
      return
    }

    let startTime = currentTime

    if (currentTime === 0) {
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

  function onButtonClick() {
    setIsRunning(!isRunning)
  }

  return (
    <div className={classNames('timer', className)}>
      <div className="timer__output">
        <svg className="timer__output-circle" viewBox="0 0 100 100">
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="48"
            strokeWidth="4"
            strokeDasharray={circlePathLengthRef.current}
            strokeDashoffset={
              circlePathLengthRef.current +
              circlePathLengthRef.current * progress
            }
          />
        </svg>

        <div className="timer__output-text">
          {(currentTime / 1000).toFixed(0)}s
        </div>
      </div>

      <SecondaryButton className="timer__button" onClick={onButtonClick}>
        {isRunning ? 'Pause timer' : 'Start timer'}
      </SecondaryButton>
    </div>
  )
}
