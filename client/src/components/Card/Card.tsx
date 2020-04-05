import classNames from 'classnames'
import React from 'react'

import './card.scss'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
  return <div className={classNames('card', className)}>{children}</div>
}
