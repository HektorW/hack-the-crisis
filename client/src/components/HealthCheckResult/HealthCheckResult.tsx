import React from 'react'

import { CoughAnswers } from '../../enums/HealthCheckAnswers'
import HealthCheckNames from '../../enums/HealthCheckNames'
import PrimaryButton from '../_buttons/PrimaryButton'
import { useCloseDialog } from '../_layouts/DialogLayout/DialogLayout.hooks'

import SelfIsolateResult from './_results/SelfIsolateResult'

import './health-check-result.scss'

interface HealthCheckResultProps {
  result: Record<string, any>

  onRepeat: () => void
}

export default function HealthCheckResult({
  result,

  onRepeat
}: HealthCheckResultProps) {
  const closeDialog = useCloseDialog()

  // TODO : Some logic selecting right thing
  const ResultComponent = SelfIsolateResult

  return (
    <div className="health-check-result">
      <div className="health-check-result__title">Your results</div>

      <div className="health-check-result__content">
        <ResultComponent result={result} />
      </div>

      <div className="health-check-result__buttons">
        <PrimaryButton
          className="health-check-result__repeat"
          onClick={onRepeat}
        >
          Repeat test
        </PrimaryButton>

        <PrimaryButton
          className="health-check-result__done"
          onClick={closeDialog}
        >
          Done
        </PrimaryButton>
      </div>
    </div>
  )
}
