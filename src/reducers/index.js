import { combineReducers } from 'redux';
import { addTeamsReducer } from './addTeamsReducer'

const rootReducer = combineReducers({
addTeamsReducer,
})

export default rootReducer;