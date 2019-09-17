import React from 'react';
import { shallow } from 'enzyme';
import { PickALeague, mapStateToProps, mapDispatchToProps } from './PickALeague';
import { addTeams } from '../../actions/index'

describe('PickALeague', () => {
  let wrapper, mockAddTeams;

  beforeEach(() => {
    mockAddTeams = jest.fn();
    wrapper = shallow(<PickALeague
    addTeams={mockAddTeams}
    teams={[]}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getNFLTeams on a button click', () => {

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().getNFLTeams = jest.fn();
    wrapper.find('button').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().getNFLTeams).toHaveBeenCalled();
  });

  it('should call getNFLTeams on an input click', () => {

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().getNFLTeams = jest.fn();
    wrapper.find('input').at(0).simulate('click', mockEvent);

    expect(wrapper.instance().getNFLTeams).toHaveBeenCalled();
  });

  it('should call getNCAATeams on an input click', () => {

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().getNCAATeams = jest.fn();
    wrapper.find('input').at(1).simulate('click', mockEvent);

    expect(wrapper.instance().getNCAATeams).toHaveBeenCalled();
  });

  it('should call getNCAATeams on a button click', () => {

    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().getNCAATeams = jest.fn();
    wrapper.find('button').at(1).simulate('click', mockEvent);

    expect(wrapper.instance().getNCAATeams).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {

    it('should return an array with the fetched teams', () => {
        let mockStore = {
          teams: [
            {
              idTeam: "134920",
              strLeague: "NFL",
              strTeam: "New England Patriots",
              strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
            },
            {
              idTeam: "134922",    
              strLeague: "NFL",  
              strTeam: "Baltimore Ravens",
              strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/einz3p1546172463.png"
            }
          ],
          randomTeam: {
            idTeam: "134920",
            strLeague: "NFL",
            strTeam: "New England Patriots",
            strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
          }
        }

        let expected = {
          teams: [
            {
              idTeam: "134920",
              strLeague: "NFL",
              strTeam: "New England Patriots",
              strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
            },
            {
              idTeam: "134922",    
              strLeague: "NFL",  
              strTeam: "Baltimore Ravens",
              strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/einz3p1546172463.png"
            }
          ]
        }

        expect(mapStateToProps(mockStore)).toEqual(expected)
    });
  });

    describe('mapDispatchToProps', () => {

      it('should dispatch addTeams when called', () => {
        
        let mockTeams = [
          {
            idTeam: "134920",
            strTeam: "New England Patriots",
          },
          {
            idTeam: "134922",    
            strTeam: "Baltimore Ravens",
          }
        ]

        let mockDispatch = jest.fn();
        let actionToDispatch = addTeams(mockTeams);
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.addTeams([{idTeam: "134920", strTeam: "New England Patriots"}, {idTeam: "134922", strTeam: "Baltimore Ravens"}]);
      
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

    })

});