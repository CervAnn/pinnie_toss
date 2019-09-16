import { combineReducers } from 'redux';
import { addTeamsReducer } from './addTeamsReducer'

const rootReducer = combineReducers({
teams: addTeamsReducer,
})

export default rootReducer;