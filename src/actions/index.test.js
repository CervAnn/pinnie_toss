import { addTeams, pickRandom } from "../actions/index";

describe("Actions", () => {
  it("should have a type of ADD_TEAMS", () => {
    let teams = [
      {
        idTeam: "136915",
        idLeague: "4479",
        strTeam: "Michigan",
        strAlternate: "Wolverines",
        strStadiumLocation: "Ann Arbor, Michigan, USA"
      },
      {
        idTeam: "136916",
        idLeague: "4479",
        strTeam: "Michigan State",
        strAlternate: "Spartans",
        strStadiumLocation: "East Lansing, Michigan, USA"
      }
    ];

    let expectedAction = {
      type: "ADD_TEAMS",
      teams
    };

    expect(addTeams(teams)).toEqual(expectedAction);
  });

  it("should have a type of PICK_RANDOM", () => {
    let team = {
      idTeam: "136915",
      idLeague: "4479",
      strTeam: "Michigan",
      strAlternate: "Wolverines",
      strStadiumLocation: "Ann Arbor, Michigan, USA"
    };

    let expectedAction = {
      type: "PICK_RANDOM",
      team
    };

    expect(pickRandom(team)).toEqual(expectedAction);
  });
});
