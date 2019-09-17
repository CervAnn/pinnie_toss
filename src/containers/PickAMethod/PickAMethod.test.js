import React from "react";
import { shallow } from "enzyme";
import {
  PickAMethod,
  mapStateToProps,
  mapDispatchToProps
} from "./PickAMethod";
import { pickRandom } from "../../actions/index";

describe("PickAMethod", () => {
  let wrapper, mockPickRandom;

  beforeEach(() => {
    mockPickRandom = jest.fn();
    wrapper = shallow(
      <PickAMethod pickRandom={mockPickRandom} teams={[]} randomTeam={{}} />
    );
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call randomTeam on a button click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().randomTeam = jest.fn();
    wrapper
      .find("button")
      .at(0)
      .simulate("click", mockEvent);

    expect(wrapper.instance().randomTeam).toHaveBeenCalled();
  });

  it("should call randomTeam on an input click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().randomTeam = jest.fn();
    wrapper
      .find("input")
      .at(0)
      .simulate("click", mockEvent);

    expect(wrapper.instance().randomTeam).toHaveBeenCalled();
  });

  describe("mapStateToProps", () => {
    it("should return an object with the contents of the store", () => {
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

      expect(mapStateToProps(mockStore)).toEqual(mockStore);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch pickRandom when called", () => {
      let mockTeams = [
        {
          idTeam: "134920",
          strTeam: "New England Patriots"
        },
        {
          idTeam: "134922",
          strTeam: "Baltimore Ravens"
        }
      ];

      let mockDispatch = jest.fn();
      let actionToDispatch = pickRandom(mockTeams);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.pickRandom([
        { idTeam: "134920", strTeam: "New England Patriots" },
        { idTeam: "134922", strTeam: "Baltimore Ravens" }
      ]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
