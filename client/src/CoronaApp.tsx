import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'

import Router from './components/_routing/Router'
import { CoronaStore } from './store/store.types'

interface CoronaAppProps {
  store: CoronaStore
}

function CoronaApp({ store }: CoronaAppProps) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default hot(CoronaApp)
