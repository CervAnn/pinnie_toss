import {
  addTeams,
  pickRandom,
  addLeague,
  addSeason,
  addUnderDogs,
  addWinners,
  getFinalPick
} from "../actions/index";

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

  it("should have a type of ADD_LEAGUE", () => {
    let league = {
      leagueName: "NCAA",
      leagueId: 4479,
      leagueDivision: "FBS"
    };

    let expectedAction = {
      type: "ADD_LEAGUE",
      league
    };

    expect(addLeague(league)).toEqual(expectedAction);
  });

  it("should have a type of ADD_SEASON", () => {
    let season = 2019;

    let expectedAction = {
      type: "ADD_SEASON",
      season
    };
    expect(addSeason(season)).toEqual(expectedAction);
  });

  it("should have a type of ADD_UNDERDOGS", () => {
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
      type: "ADD_UNDERDOGS",
      teams
    };
    expect(addUnderDogs(teams)).toEqual(expectedAction);
  });

  it("should have a type of ADD_WINNERS", () => {
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
      type: "ADD_WINNERS",
      teams
    };
    expect(addWinners(teams)).toEqual(expectedAction);
  });

  it("should have a type of GET_FINAL_PICK", () => {
    let team = {
      idTeam: "136915",
      idLeague: "4479",
      strTeam: "Michigan",
      strAlternate: "Wolverines",
      strStadiumLocation: "Ann Arbor, Michigan, USA"
    };

    let expectedAction = {
      type: "GET_FINAL_PICK",
      team
    };

    expect(getFinalPick(team)).toEqual(expectedAction);
  });
});
