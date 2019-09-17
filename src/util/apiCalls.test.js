import { fetchFootballData } from "./apiCalls";

describe("fetchFootballData", () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
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
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    fetchFootballData();

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=American_Football&c=USA"
    );
  });

  it("should return an array of albums (HAPPY) :)", () => {
    fetchFootballData().then(results => expect(results).toEqual(mockResponse));
  });

  it("should return an error (SAD) :(", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(fetchFootballData()).rejects.toEqual(
      Error("There was an issue grabbing the data.")
    );
  });

  it("should return an error if the promise rejects (SAD) :(", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: "There was an issue grabbing the data."
      });
    });

    expect(fetchFootballData()).rejects.toEqual({
      message: "There was an issue grabbing the data."
    });
  });
});
