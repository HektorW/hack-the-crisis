import { Store, Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { AllStoreActions, CoronaStoreState } from '../modules/modules.types'

export interface EmptyAction<Type> extends Action<Type> {}

export interface PayloadAction<Type, Payload> extends EmptyAction<Type> {
  readonly payload: Payload
}

export type CoronaStore = Store<CoronaStoreState, AllStoreActions>

export type CoronaStoreDispatch = ThunkDispatch<
  CoronaStoreState,
  void,
  AllStoreActions
>

export type CoronaStoreGetState = () => CoronaStoreState
