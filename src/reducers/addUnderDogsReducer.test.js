import { addUnderDogsReducer } from './addUnderDogsReducer';

describe('addUnderDogsReducer', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = addUnderDogsReducer(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the action\'s teams that underdogs', () => {
    let mockAction = {
      type: 'ADD_UNDERDOGS',
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
    };

    let expected = [
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


    let result = addUnderDogsReducer({}, mockAction);
    
    expect(result).toEqual(expected)
  });
})