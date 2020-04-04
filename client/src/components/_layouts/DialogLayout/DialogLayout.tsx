import classNames from 'classnames'
import React from 'react'

import './dialog-layout.scss'
import RoundButton from '../../_buttons/RoundButton'

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
      <RoundButton
        className="dialog-layout__close"
        onClick={onClose}
      ></RoundButton>

      {children}
    </div>
  )
}
