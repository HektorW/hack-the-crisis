import classNames from 'classnames'
import React from 'react'

import './dialog-layout.scss'

export interface DialogLayoutProps {
  notInPageLayout?: boolean

  className?: string
  children: React.ReactNode

  onClose?: () => void
}

export default function DialogLayout({
  notInPageLayout,

  className,
  children,

  onClose
}: DialogLayoutProps) {
  return (
    <div
      className={classNames(
        'dialog-layout',
        notInPageLayout && 'dialog-layout--full',
        className
      )}
    >
      <button className="dialog-layout__close" onClick={onClose}></button>

      {children}
    </div>
  )
}
