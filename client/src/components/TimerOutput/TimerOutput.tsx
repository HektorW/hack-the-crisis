import React from 'react'
import './timer-output.scss'

interface TimerOutputProps {
  currentTimeMs: number
  maxTimeMs: number
}

export default function TimerOutput({
  currentTimeMs,
  maxTimeMs
}: TimerOutputProps) {
  return <div>{currentTimeMs}</div>
}
