import React, { useState } from 'react'

import {
  CoughAnswers,
  BreathingProblemAnsers,
  EnergyAnswers
} from '../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../enums/HealthCheckNames'
import { useDispatchSelfReport } from '../../hooks/selfReportsHooks'
import HealthCheckForm from '../HealthCheckForm'
import HealthCheckResult from '../HealthCheckResult'
import DialogLayout from '../_layouts/DialogLayout'
import { DialogLayoutProps } from '../_layouts/DialogLayout/DialogLayout'
import { useCloseDialog } from '../_layouts/DialogLayout/DialogLayout.hooks'

interface HealthCheckDialogProps
  extends Omit<DialogLayoutProps, 'className' | 'children'> {}

export default function HealthCheckDialog({
  ...dialogLayoutProps
}: HealthCheckDialogProps) {
  const [result, setResult] = useState(null)
  // const [result, setResult] = useState({
  //   [HealthCheckNames.Coughing]: CoughAnswers.Often,
  //   [HealthCheckNames.BreathingProblem]: BreathingProblemAnsers.LargeEffort,
  //   [HealthCheckNames.Energy]: EnergyAnswers.MostlyBed
  // })

  const dispatchSelfReport = useDispatchSelfReport()

  function onHealthCheckResult(result: Record<HealthCheckNames, number>) {
    // Store result
    const entries = Object.entries(result).map(
      (entry: [HealthCheckNames, number]) => ({
        questionId: entry[0],
        answerId: entry[1],
        answeredDate: new Date().toISOString()
      })
    )

    // Stores it in firebase on the customer.
    dispatchSelfReport(entries)

    // Needed for displaying the HealthCheckResult
    setResult(result)
  }

  function onRepeatHealthCheck() {
    setResult(null)
  }

  return (
    <DialogLayout {...dialogLayoutProps}>
      {result && (
        <HealthCheckResult result={result} onRepeat={onRepeatHealthCheck} />
      )}

      {!result && <HealthCheckForm onResult={onHealthCheckResult} />}
    </DialogLayout>
  )
}
