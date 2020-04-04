import classNames from 'classnames'
import React from 'react'

import './progress-bar.scss'

interface ProgressBarProps {
  max: number
  current: number

  className?: string
}

export default function ProgressBar({
  max,
  current,

  className
}: ProgressBarProps) {
  const progress = (current / max) * 100

  return (
    <div className={classNames('progress-bar', className)}>
      <div className="progress-bar__inner" style={{ width: `${progress}%` }} />
    </div>
  )
}
