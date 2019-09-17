export const addUnderDogsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_UNDERDOGS":
      return action.teams;
    default:
      return state;
  }
};
