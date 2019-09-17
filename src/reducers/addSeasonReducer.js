export const addSeasonReducer = (state = "", action) => {
  switch(action.type) {
    case 'ADD_SEASON' :
      console.log("stuff", action.season)
      return action.season;
    default :
    return state;
  }
}