import user from './reducers/user'
import common from './reducers/common'
import system from './reducers/system'
import { createStore, combineReducers } from 'redux'
 
const reducer = combineReducers({
  user,
  common,
  system
})

export default createStore(reducer)