import React, { useState } from 'react'

import HealthCheckForm from '../HealthCheckForm'
import HealthCheckResult from '../HealthCheckResult'
import DialogLayout from '../_layouts/DialogLayout'
import { DialogLayoutProps } from '../_layouts/DialogLayout/DialogLayout'

interface HealthCheckDialogProps
  extends Omit<DialogLayoutProps, 'className' | 'children'> {}

export default function HealthCheckDialog({
  ...dialogLayoutProps
}: HealthCheckDialogProps) {
  const [result, setResult] = useState(null)

  function onHealthCheckResult(result) {
    // Store result
    setResult(result)
  }

  return (
    <DialogLayout {...dialogLayoutProps}>
      {result && <HealthCheckResult result={result} />}

      {!result && <HealthCheckForm onResult={onHealthCheckResult} />}
    </DialogLayout>
  )
}
