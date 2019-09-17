import React from "react";
import { shallow } from "enzyme";
import {
  PickMatchUp,
  mapStateToProps,
  mapDispatchToProps
} from "./PickMatchUp";
import { addSeason, addUnderDogs, addWinners } from "../../actions/index";

describe("PickMatchUp", () => {
  let wrapper, mockAddSeason, mockAddUnderDogs, mockAddWinners;

  beforeEach(() => {
    mockAddSeason = jest.fn();
    mockAddUnderDogs = jest.fn();
    mockAddWinners = jest.fn();
    wrapper = shallow(
      <PickMatchUp
        addSeason={mockAddSeason}
        addUnderDogs={mockAddUnderDogs}
        addWinners={mockAddWinners}
        teams={[]}
        league={{}}
        season={2019}
        underDogs={[]}
        winners={[]}
      />
    );
  });

  it("should match the snapshot with all data passed in correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call filterUnderDogs on a button click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().filterUnderDogs = jest.fn();
    wrapper
      .find("button")
      .at(1)
      .simulate("click", mockEvent);

    expect(wrapper.instance().filterUnderDogs).toHaveBeenCalled();
  });

  it("should call filterUnderDogs on an input click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().filterUnderDogs = jest.fn();
    wrapper
      .find("input")
      .at(1)
      .simulate("click", mockEvent);

    expect(wrapper.instance().filterUnderDogs).toHaveBeenCalled();
  });

  it("should call filterWinningestTeams on a button click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().filterWinningestTeams = jest.fn();
    wrapper
      .find("button")
      .at(1)
      .simulate("click", mockEvent);

    expect(wrapper.instance().filterWinningestTeams).toHaveBeenCalled();
  });

  it("should call filterWinningestTeams on an input click", () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().filterWinningestTeams = jest.fn();
    wrapper
      .find("input")
      .at(1)
      .simulate("click", mockEvent);

    expect(wrapper.instance().filterWinningestTeams).toHaveBeenCalled();
  });

  describe("mapStateToProps", () => {
    it("should return an object with the contents of the store", () => {
      let mockStore = {
        teams: [
          {
            idTeam: "134920"
          },
          {
            idTeam: "134922"
          }
        ],
        league: {
          strLeague: "NFL"
        },
        season: 2019,
        underDogs: [],
        winners: [
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

      expect(mapStateToProps(mockStore)).toEqual(mockStore);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch addSeason when called", () => {
      let mockSeason = 2019;

      let mockDispatch = jest.fn();
      let actionToDispatch = addSeason(mockSeason);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addSeason(2019);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should dispatch addUnderDogs when called", () => {
      let mockTeams = [
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
      ];

      let mockDispatch = jest.fn();
      let actionToDispatch = addUnderDogs(mockTeams);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addUnderDogs(mockTeams);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should dispatch addWinners when called", () => {
      let mockTeams = [
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
      ];

      let mockDispatch = jest.fn();
      let actionToDispatch = addWinners(mockTeams);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addWinners(mockTeams);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
