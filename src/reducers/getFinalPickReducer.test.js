import { getFinalPickReducer } from "./getFinalPickReducer";

describe("getFinalPickReducer", () => {
  it("should return the default state", () => {
    let expected = {};
    let result = getFinalPickReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return a finalTeam object per the action", () => {
    let mockAction = {
      type: "GET_FINAL_PICK",
      team: {
        idTeam: "134920",
        strLeague: "NFL",
        strTeam: "New England Patriots",
        strTeamBadge:
          "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
      }
    };
    let expected = {
      idTeam: "134920",
      strLeague: "NFL",
      strTeam: "New England Patriots",
      strTeamBadge:
        "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
    };

    let result = getFinalPickReducer({}, mockAction);

    expect(result).toEqual(expected);
  });
});
