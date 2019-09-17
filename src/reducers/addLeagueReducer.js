export const addLeagueReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_LEAGUE":
      return action.league;
    default:
      return state;
  }
};
