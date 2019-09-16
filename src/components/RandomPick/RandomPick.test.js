import React from 'react';
import { shallow } from 'enzyme';
import { RandomPick, mapStateToProps } from './RandomPick';

describe('RandomPick', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <RandomPick
        teams={[]}
        randomTeam={
          {
          idTeam: "134920",
          strLeague: "NFL",
          strTeam: "New England Patriots",
          strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
          }
        }
      />
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })  

  
  describe('mapStateToProps', () => {
    it('should return an object with the contents of the store', () => {
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
            strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/einz3p1546172463.png",
          }
        ],
        randomTeam: {
            idTeam: "136915",
            idLeague: "4479",
            strTeam: "Michigan",
            strAlternate: "Wolverines",
            strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/8f2j7k1564336246.png"
        }
      }

      expect(mapStateToProps(mockStore)).toEqual(mockStore)
    })
  })
}) 