import React from "react";
import { shallow } from "enzyme";
import { Container, mapStateToProps } from "../Container/Container";

describe("Container", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container teams={[]} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should return an array of objects", () => {
      let mockStore = {
        teams: [
          {
            idTeam: "134920",
            strLeague: "NFL",
            strTeam: "New England Patriots",
            strTeamBadge:
              "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
          },
          {
            idTeam: "134922",
            strLeague: "NFL",
            strTeam: "Baltimore Ravens",
            strTeamBadge:
              "https://www.thesportsdb.com/images/media/team/badge/einz3p1546172463.png"
          }
        ],
        randomTeam: {
          idTeam: "134920",
          strLeague: "NFL",
          strTeam: "New England Patriots",
          strTeamBadge:
            "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
        }
      };

      let expected = {
        teams: [
          {
            idTeam: "134920",
            strLeague: "NFL",
            strTeam: "New England Patriots",
            strTeamBadge:
              "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
          },
          {
            idTeam: "134922",
            strLeague: "NFL",
            strTeam: "Baltimore Ravens",
            strTeamBadge:
              "https://www.thesportsdb.com/images/media/team/badge/einz3p1546172463.png"
          }
        ]
      };

      expect(mapStateToProps(mockStore)).toEqual(expected);
    });
  });
});
