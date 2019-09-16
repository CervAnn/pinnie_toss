export const addTeamsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TEAMS' :
      // action.teams = action.teams.filter(team => team.idLeague === "4391" && team.strLeague === "NFL")
      return action.teams
    default:
      return state
  }
}