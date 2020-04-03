import { createSelector } from 'reselect'

import { CoronaStoreState } from '../modules.types'

function getAuthenticationState(state: CoronaStoreState) {
  return state.authentication
}

export const getIsAuthenticated = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.user !== null
)

export const getIsAdminUser = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.user?.admin === true
)

export const getAuthenticatedUserId = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.user?.id ?? null
)

export const getIsAuthenticating = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.isLoggingIn
)

export const getAuthenticationError = createSelector(
  getAuthenticationState,
  authenticationState => authenticationState.loginError
)
