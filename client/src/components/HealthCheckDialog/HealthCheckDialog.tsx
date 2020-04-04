import React, { useState } from 'react'

import HealthCheckForm from '../HealthCheckForm'
import HealthCheckResult from '../HealthCheckResult'
import DialogLayout from '../_layouts/DialogLayout'
import { DialogLayoutProps } from '../_layouts/DialogLayout/DialogLayout'
import { useDispatchSelfReport } from '../../hooks/selfReportsHooks'

interface HealthCheckDialogProps
  extends Omit<DialogLayoutProps, 'className' | 'children'> {}

export default function HealthCheckDialog({
  ...dialogLayoutProps
}: HealthCheckDialogProps) {
  const [result, setResult] = useState(null)
  const dispatchSelfReport = useDispatchSelfReport();

  function onHealthCheckResult(result: Record<string, number>) {
    // Store result
    const entries = Object.entries(result).map(entry => ({
      questionId: entry[0],
      answerId: entry[1],
      answeredDate: new Date().toISOString()
    }))

    // Stores it in firebase on the customer.
    dispatchSelfReport(entries);

    // Needed for displaying the HealthCheckResult
    setResult(result)
  }

  return (
    <DialogLayout {...dialogLayoutProps}>
      {result && <HealthCheckResult result={result} />}

      {!result && <HealthCheckForm onResult={onHealthCheckResult} />}
    </DialogLayout>
  )
}
