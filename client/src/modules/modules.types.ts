import {
  AuthenticationState,
  AuthenticationActions
} from './authentication/authentication.types'

export interface CoronaStoreState {
  readonly authentication: AuthenticationState
}

export type AllStoreActions = AuthenticationActions
