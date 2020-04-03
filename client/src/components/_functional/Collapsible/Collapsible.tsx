import React from 'react'

import { useCollapsible } from './Collapsible.hooks'

interface CollapsibleProps {
  animationDuration?: number
  isCollapsed: boolean

  className?: string
  children: React.ReactNode
}

export default function Collapsible({
  animationDuration = 400,
  isCollapsed,

  className,
  children
}: CollapsibleProps) {
  const elementRef = useCollapsible(animationDuration, isCollapsed)

  return (
    <div className={className} ref={elementRef}>
      {children}
    </div>
  )
}
