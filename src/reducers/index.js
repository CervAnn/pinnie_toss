import { combineReducers } from 'redux';
import { addTeamsReducer } from './addTeamsReducer'
import { pickRandomReducer } from './pickRandomReducer'
import { addLeagueReducer } from './addLeagueReducer'
import { addSeasonReducer } from './addSeasonReducer'
import { addUnderDogsReducer } from './addUnderDogsReducer'
import { addWinnersReducer } from './addWinnersReducer'


const rootReducer = combineReducers({
teams: addTeamsReducer,
randomTeam: pickRandomReducer,
league: addLeagueReducer,
season: addSeasonReducer,
underDogs: addUnderDogsReducer,
winners: addWinnersReducer
})

export default rootReducer;