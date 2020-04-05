import HealthCheckNames from '../enums/HealthCheckNames'

export function questionNameToText(name: HealthCheckNames) {
  switch (name) {
    case HealthCheckNames.Coughing:
      return 'Coughing'
    case HealthCheckNames.BreathingProblem:
      return 'Breathing problem'
    case HealthCheckNames.Energy:
      return 'Energy'
    case HealthCheckNames.CoronaContact:
      return 'Contact with Corona'
    case HealthCheckNames.BodyTemperature:
      return 'Body temperature'
    case HealthCheckNames.Pulse:
      return 'Heart rate'
    case HealthCheckNames.BreathingFrequency:
      return 'Breathing frequency'
  }
}
