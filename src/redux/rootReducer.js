import { combineReducers } from 'redux'

import DefaultPage from './movies/DefaultPage'

const rootReducer = combineReducers({
  filmStore: DefaultPage
})

export default rootReducer
