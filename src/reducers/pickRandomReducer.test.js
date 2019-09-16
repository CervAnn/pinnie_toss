import { pickRandomReducer } from './pickRandomReducer';

describe('pickRandomReducer', () => {

  it('should return the default state', () => {
    let expected = {};
    let result = pickRandomReducer(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the action\'s albums', () => {
    let mockAction = {
      type: 'PICK_RANDOM',
      team: 
        {
          idTeam: "134920",
          strLeague: "NFL",
          strTeam: "New England Patriots",
          strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
        }
    };
    let expected = 
      {
        idTeam: "134920",
        strLeague: "NFL",
        strTeam: "New England Patriots",
        strTeamBadge: "https://www.thesportsdb.com/images/media/team/badge/xtwxyt1421431860.png"
      }

    let result = pickRandomReducer({}, mockAction);
    
    expect(result).toEqual(expected)
  });
})