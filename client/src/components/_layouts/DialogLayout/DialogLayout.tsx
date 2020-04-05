import classNames from 'classnames'
import React, { useState, useEffect, useRef } from 'react'

import './dialog-layout.scss'
import useOnMount from '../../../hooks/useOnMount'
import useOnUnmount from '../../../hooks/useOnUnmount'
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
  const [hasMounted, setHasMounted] = useState(false)

  const unmountTimeoutId = useRef(0)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useOnMount(() => {
    setHasMounted(true)
  })

  useOnUnmount(() => {
    clearTimeout(unmountTimeoutId.current)
  })

  function onCloseClick() {
    setHasMounted(false)

    unmountTimeoutId.current = setTimeout(() => {
      onCloseRef.current?.()
    }, 550)
  }

  return (
    <div
      className={classNames(
        'dialog-layout',
        hasMounted && 'dialog-layout--has-mounted',
        className
      )}
    >
      <RoundButton
        className="dialog-layout__close"
        onClick={onCloseClick}
      ></RoundButton>

      <div className="dialog-layout__content">{children}</div>
    </div>
  )
}
