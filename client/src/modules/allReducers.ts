import { firebaseReducer, FirebaseReducer, FirestoreReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore' 
import { combineReducers } from 'redux';


interface UserProfile {
  email: string
}

export interface TodoValue {
  text: string
  done: boolean
}

// create schema for the DB
interface DBSchema {
  todos: TodoValue
  [name: string]: any
}

interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile, DBSchema>
  firestore: FirestoreReducer.Reducer;
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export type AppState = ReturnType<typeof rootReducer>