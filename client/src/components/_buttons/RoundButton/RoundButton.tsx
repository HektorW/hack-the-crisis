import classNames from 'classnames'
import React from 'react'

import './round-button.scss'

interface RoundButtonProps {}

export default function RoundButton({
  className,

  ...buttonProps
}: RoundButtonProps) {
  return (
    <button
      className={classNames('round-button', className)}
      {...buttonProps}
    />
  )
}
