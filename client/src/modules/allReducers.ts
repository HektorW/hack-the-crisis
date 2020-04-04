import { firebaseReducer, FirebaseReducer, FirestoreReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux';
import HealthCheckNames from "../enums/HealthCheckNames";
import { EnergyAnswers, CoughAnswers, BreathingProblemAnsers } from "../enums/HealthCheckAnswers";


interface UserProfile {
  email: string
}

interface BaseQuestion<T extends HealthCheckNames> {
  questionId: T
  answeredDate: string
}

interface CoughingQuestion extends BaseQuestion<HealthCheckNames.Coughing> {
  answerId: CoughAnswers
}
interface BreathingProblemQuestion extends BaseQuestion<HealthCheckNames.BreathingProblem> {
  answerId: BreathingProblemAnsers
}
interface EnergyQuestion extends BaseQuestion<HealthCheckNames.Energy> {
  answerId: EnergyAnswers
}
interface CoronaContactQuestion extends BaseQuestion<HealthCheckNames.CoronaContact> {
  answerId: number
}
interface BodyTemperatureQuestion extends BaseQuestion<HealthCheckNames.BodyTemperature> {
  answerId: number
}
interface BreathingFrequencyQuestion extends BaseQuestion<HealthCheckNames.BreathingFrequency> {
  answerId: number
}
interface PulseQuestion extends BaseQuestion<HealthCheckNames.Pulse> {
  answerId: number
}

export type AllQuestions = CoughingQuestion | BreathingProblemQuestion | EnergyQuestion | CoronaContactQuestion | BodyTemperatureQuestion | BreathingFrequencyQuestion | PulseQuestion

export interface ReportValue {
  completedDate?: string | null
  createdDate: string
  questionaries: AllQuestions[]
}

// create schema for the DB
interface DBSchema {
  selfreports: ReportValue[]
  [name: string]: any
}

interface FireStoreProps extends FirestoreReducer.Reducer {
  ordered: DBSchema
  data: DBSchema
}

interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>
  firestore: FireStoreProps
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export type AppState = ReturnType<typeof rootReducer>
