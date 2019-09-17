import React from 'react';
import { shallow } from 'enzyme';
import { NCAAPick, mapStateToProps } from './NCAAPick';

describe('NCAAPick', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NCAAPick
        teams={[]}
        randomTeam={{
          idTeam: "136915",
          idLeague: "4479",
          strTeam: "Michigan",
          strAlternate: "Wolverines",
          strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/8f2j7k1564336246.png"
        }}
      />
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })  
  
  describe('mapStateToProps', () => {
    it('should return an object with the contents of the store', () => {
      let mockStore = {
        teams: [
          {
            idTeam: "136915",
            idLeague: "4479",
            strTeam: "Michigan",
            strAlternate: "Wolverines",
            strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/8f2j7k1564336246.png"
          },
          {
            idTeam: "136916",      
            idLeague: "4479",
            strTeam: "Michigan State",
            strAlternate: "Spartans",
            strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/2xn7yd1564336256.png"
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

      let expected = {
        randomTeam: {
          idTeam: "136915",
          idLeague: "4479",
          strTeam: "Michigan",
          strAlternate: "Wolverines",
          strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/8f2j7k1564336246.png"
        }
      }

      expect(mapStateToProps(mockStore)).toEqual(expected)
    })
  })
}) 