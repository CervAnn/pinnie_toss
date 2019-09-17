import { addLeagueReducer } from './addLeagueReducer';

describe('addLeagueReducer', () => {

  it('should return the default state', () => {
    let expected = {};
    let result = addLeagueReducer(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return a league object per the action', () => {
    let mockAction = {
      type: 'ADD_LEAGUE',
      league: {
        leagueName: "NCAA",
        leagueId: 4479,
        leagueDivision: "FBS"
      }
    };
    let expected = {
      leagueName: "NCAA",
      leagueId: 4479,
      leagueDivision: "FBS"
    }

    let result = addLeagueReducer({}, mockAction);
    
    expect(result).toEqual(expected)
  });
})