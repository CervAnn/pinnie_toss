import { combineReducers } from 'redux';
import { addTeamsReducer } from '../reducers/addTeamsReducer'

const rootReducer = combineReducers({
  teams: addTeamsReducer,
})

export default rootReducer;