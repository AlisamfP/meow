import {combineReducers} from 'redux'
import { routerStateReducer as router } from 'redux-router'

import devices from './device'


const rootReducer = combineReducers({
  devices,
  router
})

export default rootReducer
