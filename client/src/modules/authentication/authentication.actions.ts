import { CoronaStoreDispatch } from '../../store/store.types'

import { fetchLogin, tryFetchAuthenticatedUser } from './authentication.fetch'
import {
  LoginRequestAction,
  LoginFailureAction,
  LoginSuccessAction
} from './authentication.types'

export const LOGIN_REQUEST = '@authentication/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@authentication/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@authentication/LOGIN_FAILURE'

export function login(username: string, password: string) {
  return async (dispatch: CoronaStoreDispatch) => {
    dispatch(loginRequest())
    let response
    try {
      response = await fetchLogin(username, password)
    } catch (error) {
      dispatch(loginFailure(error))
      return
    }

    dispatch(loginSuccess(response))
  }
}

export function tryGetAuthenticatedUser() {
  return async (dispatch: CoronaStoreDispatch) => {
    dispatch(loginRequest())
    let response
    try {
      response = await tryFetchAuthenticatedUser()
    } catch (_) {
      return
    }

    dispatch(loginSuccess(response))
  }
}

function loginRequest(): LoginRequestAction {
  return {
    type: LOGIN_REQUEST
  }
}

function loginFailure(error: Error): LoginFailureAction {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

function loginSuccess(user: any): LoginSuccessAction {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}
