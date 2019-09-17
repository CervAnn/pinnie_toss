import { addSeasonReducer } from "./addSeasonReducer";

describe("addSeasonReducer", () => {
  it("should return the default state", () => {
    let expected = "";
    let result = addSeasonReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return a league object per the action", () => {
    let mockAction = {
      type: "ADD_SEASON",
      season: 2019
    };

    let expected = 2019;

    let result = addSeasonReducer({}, mockAction);

    expect(result).toEqual(expected);
  });
});
