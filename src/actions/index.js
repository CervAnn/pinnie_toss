export const addTeams = teams => ({
  type: "ADD_TEAMS",
  teams
});

export const pickRandom = team => ({
  type: "PICK_RANDOM",
  team
});

export const addLeague = league => ({
  type: "ADD_LEAGUE",
  league
});

export const addSeason = season => ({
  type: "ADD_SEASON",
  season
});

export const addUnderDogs = teams => ({
  type: "ADD_UNDERDOGS",
  teams
});

export const addWinners = teams => ({
  type: "ADD_WINNERS",
  teams
});

export const getFinalPick = team => ({
  type: "GET_FINAL_PICK",
  team
});
