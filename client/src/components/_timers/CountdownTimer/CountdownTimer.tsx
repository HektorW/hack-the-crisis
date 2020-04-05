import classNames from 'classnames'
import React from 'react'

import useOnMount from '../../../hooks/useOnMount'
import useTimer from '../useTimer'

import './countdown-timer.scss'

interface CountdownTimerProps {
  timeS: number

  className?: string

  onDone: () => void
}

export default function CountdownTimer({
  timeS,

  className,

  onDone
}: CountdownTimerProps) {
  const { currentTimeMs, start } = useTimer(timeS, onDone)

  useOnMount(() => {
    start()
  })

  return (
    <div className={classNames('countdown-timer', className)}>
      {Math.ceil(currentTimeMs / 1000).toFixed(0)}
    </div>
  )
}
