import 'babel-core/polyfill'

import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createLogger from 'redux-logger'

import App from './containers/App'
import root from './reducers'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)
const store = createStoreWithMiddleware(root)

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'))
