import classNames from 'classnames'
import React from 'react'

import './secondary-button.scss'

interface SecondaryButtonProps {}

export default function SecondaryButton({
  className,

  ...buttonProps
}: SecondaryButtonProps) {
  return (
    <button
      className={classNames('secondary-button', className)}
      {...buttonProps}
    />
  )
}
