import produce, { Draft } from 'immer'

import { AllStoreActions } from '../modules.types'

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './authentication.actions'
import { AuthenticationState } from './authentication.types'

const initialState: AuthenticationState = {
  user: null,

  isLoggingIn: false,
  loginError: null
}

function authenticationReducer(
  draft: Draft<AuthenticationState>,
  action: AllStoreActions
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      draft.isLoggingIn = true
      draft.loginError = null
      break
    case LOGIN_FAILURE:
      draft.loginError = action.payload
      draft.isLoggingIn = false
      break
    case LOGIN_SUCCESS:
      draft.user = action.payload
      draft.isLoggingIn = false
      break
  }
}

export default produce(authenticationReducer, initialState)
