import userReducer from './reducers/user'
import commonReducer from './reducers/common'
import systemReducer from './reducers/system'
import { createStore, combineReducers } from 'redux'
 
const reducer = combineReducers({
  userReducer,
  systemReducer,
  commonReducer
})

export default createStore(reducer)