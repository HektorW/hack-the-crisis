import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../modules/allReducers'

import { CoronaStore } from './store.types'

declare global {
  interface Window {
    readonly __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
    store?: CoronaStore
  }
}

export default function createCoronaStore(): CoronaStore {
  const composeEnhancers =
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const middleware = [thunk]

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )

  if (__DEV__) {
    window.store = store
  }

  return store
}
