import user from './reducers/user'
import common from './reducers/common'
import system from './reducers/system'
import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
 
const reducer = combineReducers({
  user,
  common,
  system
})

export default createStore(reducer, applyMiddleware(thunkMiddleware))