import {
  CoughAnswers,
  BreathingProblemAnsers,
  EnergyAnswers
} from '../enums/HealthCheckAnswers'
import HealthCheckNames from '../enums/HealthCheckNames'

export function answerToText(name: HealthCheckNames, answer: any) {
  switch (name) {
    case HealthCheckNames.Coughing:
      return coughAnswerToText(answer)
    case HealthCheckNames.BreathingProblem:
      return breathingProblemAnswerToText(answer)
    case HealthCheckNames.Energy:
      return energyAnswerToText(answer)
  }
}

export function coughAnswerToText(answer: CoughAnswers) {
  switch (answer) {
    case CoughAnswers.No:
      return 'Not coughing'
    case CoughAnswers.Sometimes:
      return 'Coughing sometimes'
    case CoughAnswers.Often:
      return 'Coughing often'
    case CoughAnswers.AllTheTime:
      return 'Couging all the time'
  }
}

export function breathingProblemAnswerToText(answer: BreathingProblemAnsers) {
  switch (answer) {
    case BreathingProblemAnsers.No:
      return 'No problem breathing'
    case BreathingProblemAnsers.LightEffort:
      return 'Breathing with light effort'
    case BreathingProblemAnsers.SomeEffort:
      return 'Breathing with some effort'
    case BreathingProblemAnsers.LargeEffort:
      return 'Breathing with large effort'
  }
}

export function energyAnswerToText(answer: EnergyAnswers) {
  switch (answer) {
    case EnergyAnswers.AsUsual:
      return 'Energy as usual'
    case EnergyAnswers.Tired:
      return 'A bit tired'
    case EnergyAnswers.SomewhatBed:
      return 'Mostly in bed'
    case EnergyAnswers.MostlyBed:
      return 'Stuck in bed, except for toilet'
    case EnergyAnswers.StuckInBed:
      return "Can't get out of bed"
  }
}
