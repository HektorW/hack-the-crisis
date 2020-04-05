import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'

import useOnMount from '../../../hooks/useOnMount'
import SecondaryButton from '../../_buttons/SecondaryButton'
import useTimer from '../useTimer'

import './round-timer.scss'

interface RoundTimerProps {
  timeS: number
  run: boolean

  className?: string

  onDone: () => void
}

export default function RoundTimer({
  timeS,
  run,

  className,

  onDone
}: RoundTimerProps) {
  const { isRunning, currentTimeMs, progress, start, stop, toggle } = useTimer(
    timeS,
    onDone
  )

  const circleRef = useRef<SVGCircleElement>()
  const circlePathLengthRef = useRef(0)

  useEffect(() => {
    circlePathLengthRef.current = circleRef.current.getTotalLength()
  })

  useEffect(() => {
    if (run && !isRunning) {
      start()
    }

    if (!run && isRunning) {
      stop()
    }
  }, [run, isRunning])

  // useOnMount(() => {
  //   if (autoStart) {
  //     start()
  //   }
  // })

  function onButtonClick() {
    toggle()
  }

  return (
    <div className={classNames('round-timer', className)}>
      <div className="round-timer__output">
        <svg className="round-timer__output-circle" viewBox="0 0 100 100">
          <circle
            className="round-timer__output-circle-background"
            cx="50"
            cy="50"
            r="48"
            strokeWidth="4"
          />

          <circle
            className="round-timer__output-circle-progress"
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

        {/* <div className="round-timer__output-text">
          {(currentTimeMs / 1000).toFixed(0)}s
        </div> */}
      </div>

      {/* <SecondaryButton className="round-timer__button" onClick={onButtonClick}>
        {isRunning ? 'Pause timer' : 'Start timer'}
      </SecondaryButton> */}
    </div>
  )
}
