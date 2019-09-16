export const pickRandomReducer = (state = {}, action) => {
  switch(action.type) {
    case 'PICK_RANDOM':
      return action.team
    default:
      return state
  }
}