import { firebaseReducer, FirebaseReducer, FirestoreReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux';


interface UserProfile {
  email: string
}

export interface Question {
  answerId: number // Enum?
  questionId: string // Enum?
  answeredDate: string
}

export interface ReportValue {
  completedDate?: string | null
  createdDate: string
  questionaries: Question[]
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
