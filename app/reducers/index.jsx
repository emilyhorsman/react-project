import { combineReducers } from 'redux'
import timers from './timers'
import loading from './loading'

const rootReducer = combineReducers({
  timers,
  loading
})

export default rootReducer
