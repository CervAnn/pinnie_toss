import React from "react";
import { shallow } from "enzyme";
import { RandomPick, mapStateToProps } from "./RandomPick";

describe("RandomPick", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RandomPick
        league = {{}}
      />
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should return an object of league and its contents", () => {
      let mockStore = {
        teams: [
          {
            idTeam: "134920",
            strLeague: "NFL",
            strTeam: "New England Patriots",
          },
          {
            idTeam: "134922",
            strLeague: "NFL",
            strTeam: "Baltimore Ravens",
          }
        ],
        randomTeam: {
          idTeam: "136915",
          idLeague: "4479",
          strTeam: "Michigan",
          strAlternate: "Wolverines",
        },
        league: {
          leagueName: "NCAA",
          leagueId: 4479,
          leagueDivision: "FBS"
        }
      };

      let expected = {
          league : {
          leagueName: "NCAA",
          leagueId: 4479,
          leagueDivision: "FBS"
        }
      }

      expect(mapStateToProps(mockStore)).toEqual(expected);
    });
  });
});
