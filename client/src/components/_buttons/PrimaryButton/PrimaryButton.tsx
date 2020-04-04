import classNames from 'classnames'
import React, { ReactNode } from 'react'

import './primary-button.scss'

interface PrimaryButtonProps {}

export default function PrimaryButton({
  className,

  ...buttonProps
}: PrimaryButtonProps) {
  return (
    <button
      className={classNames('primary-button', className)}
      {...buttonProps}
    />
  )
}
