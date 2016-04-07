import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import positions from './modules/positions'
import applicants from './modules/applicants'
import criteriaSets from './modules/criteriaSets'

export default combineReducers({
  router,
  positions,
  applicants,
  criteriaSets
})
