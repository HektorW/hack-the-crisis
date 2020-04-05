import classNames from 'classnames'
import React, { useState, useEffect, useRef } from 'react'

import './dialog-layout.scss'
import useCallAfterNextRender from '../../../hooks/useCallAfterNextRender'
import useOnMount from '../../../hooks/useOnMount'
import useOnUnmount from '../../../hooks/useOnUnmount'
import RoundButton from '../../_buttons/RoundButton'

import DialogLayoutContext from './DialogLayout.context'

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
  const callAfterNextRender = useCallAfterNextRender()

  const unmountTimeoutId = useRef(0)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useOnMount(() => {
    callAfterNextRender(() => {
      setHasMounted(true)
    })
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
    <DialogLayoutContext.Provider value={{ closeDialog: onCloseClick }}>
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
    </DialogLayoutContext.Provider>
  )
}
