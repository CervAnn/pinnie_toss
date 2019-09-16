import { combineReducers } from 'redux';
import { addTeamsReducer } from './addTeamsReducer'
import { pickRandomReducer } from './pickRandomReducer'

const rootReducer = combineReducers({
teams: addTeamsReducer,
randomTeam: pickRandomReducer
})

export default rootReducer;