import counterReducer from './counterReducer'
import loggedReducer from './isLogged'
import courseReducer from './courseReducer'
import { combineReducers } from 'redux'

//ALL REDUCER
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    courses: courseReducer
})

export default allReducers
