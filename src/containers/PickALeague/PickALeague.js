import React, { Component } from "react";
import "./PickALeague.css";
import { fetchFootballData } from "../../util/apiCalls";
import { addTeams, addLeague } from "../../actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class PickALeague extends Component {
  getNFLTeams = e => {
    e.preventDefault();
    let league = {
      leagueName: "NFL",
      leagueId: 4391
    };
    this.props.addLeague(league);
    fetchFootballData()
      .then(nflTeams =>
        nflTeams.teams.filter(
          team => team.idLeague === "4391" && team.strLeague === "NFL"
        )
      )
      .then(teams => this.props.addTeams(teams));
  };

  getNCAATeams = e => {
    e.preventDefault();
    let league = {
      leagueName: "NCAA",
      leagueId: 4479,
      leagueDivision: "FBS"
    };
    this.props.addLeague(league);
    fetchFootballData()
      .then(ncaaTeams =>
        ncaaTeams.teams.filter(
          team => team.idLeague === "4479" && team.strDivision === "FBS"
        )
      )
      .then(teams => this.props.addTeams(teams));
  };

  render() {
    if (this.props.teams.length > 0) {
      return <Redirect push to="/method" />;
    }
    return (
      <article className="pickLeague">
        <h1 id="pickLeague-text">Let's Get Started, Pick A League!</h1>
        <div id="nfl-buttons-container">
          <input
            type="submit"
            id="nfl"
            value=""
            onClick={e => this.getNFLTeams(e)}
          />
          <button id="nfl-button" onClick={e => this.getNFLTeams(e)}>
            NFL
          </button>
        </div>
        <div id="ncaa-buttons-container">
          <input
            type="submit"
            id="ncaa"
            value=""
            onClick={e => this.getNCAATeams(e)}
          />
          <button id="ncaa-button" onClick={e => this.getNCAATeams(e)}>
            NCAA
          </button>
        </div>
      </article>
    );
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
  league: store.league
});

export const mapDispatchToProps = dispatch => ({
  addTeams: teams => dispatch(addTeams(teams)),
  addLeague: league => dispatch(addLeague(league))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickALeague);

PickALeague.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  league: PropTypes.object,
  mapStateToProps: PropTypes.func,
  mapDispatchToProps: PropTypes.func
};
