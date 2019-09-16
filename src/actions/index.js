export const addTeams = teams => ({
  type: 'ADD_TEAMS',
  teams
})

export const pickRandom = team => ({
  type: 'PICK_RANDOM',
  team
})