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

const app = document.createElement('div')
document.body.appendChild(app)

setTimeout(() => {
  store.dispatch({ type: 'FOO' })
}, 1000)

render(
  <Provider store={store}>
    <App />
  </Provider>
, app)
