import counterReducer from './counterReducer'
import loggedReducer from './isLogged'
import courseReducer from './courseReducer'
import { combineReducers } from 'redux'

//ALL REDUCER
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    course: courseReducer
})

export default allReducers
