export const getFinalPickReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_FINAL_PICK' :
      return action.team;
    default :
    return state;
  }
}