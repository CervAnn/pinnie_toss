export const addWinnersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_WINNERS":
      return action.teams;
    default:
      return state;
  }
};
