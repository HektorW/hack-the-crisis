import './hot-load-config'

import React from 'react'
import { render } from 'react-dom'

import CoronaApp from './CoronaApp'
import createCoronaStore from './store/createStore'

import './styles/main.scss'

const rootElement = document.querySelector('#app')

const store = createCoronaStore()

render(<CoronaApp store={store} />, rootElement)
