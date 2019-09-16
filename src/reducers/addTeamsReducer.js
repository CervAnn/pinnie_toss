export const addTeamsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TEAMS' :
      let filteredTeams = action.teams.filter(team => team.idLeague === "4391" && team.strLeague === "NFL")
      return filteredTeams
    default:
      return state
  }
}