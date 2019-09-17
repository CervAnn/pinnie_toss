import React, { Component } from "react";
import { connect } from "react-redux";
import "./PickMatchUp.css";
import {
  addSeason,
  addUnderDogs,
  addWinners,
  getFinalPick
} from "../../actions/index";
import { fetchSeasonData } from "../../util/apiCalls";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class PickMatchUp extends Component {
  filterUnderDogs = () => {
    let season;
    this.props.league.leagueName === "NFL" ? (season = 2019) : (season = 1920);
    this.props.addSeason(season);
    fetchSeasonData(season, this.props.league.leagueId)
      .then(data => data.table.filter(team => team.loss > team.win))
      .then(data => this.props.addUnderDogs(data))
      .then(data => this.generatePick(data.teams))
      .catch(error => alert(error));
  };

  filterWinningestTeams = () => {
    let season;
    this.props.league.leagueName === "NFL" ? (season = 2019) : (season = 1920);
    this.props.addSeason(season);
    fetchSeasonData(season, this.props.league.leagueId)
      .then(data => data.table.filter(team => team.loss < team.win))
      .then(data => this.props.addWinners(data))
      .then(data => this.generatePick(data.teams))
      .catch(error => alert(error));
  };

  generatePick = filteredTeams => {
    let randomIndex =
      Math.round(Math.random() * (filteredTeams.length - 0)) + 0;
    let faction = filteredTeams[randomIndex];
    this.props.getFinalPick(
      this.props.teams.find(team => team.idTeam === faction.teamid)
    );
  };

  render() {
    return (
      <section className="PickMatchUp">
        <h1 id="pickMatchUp-text">Do you like an underdog?</h1>
        <div id="pickUnderDog-buttons-container">
          <Link to="/yourTeam" id="yourTeam-link">
            <input
              type="submit"
              id="gloves"
              value=""
              onClick={this.filterUnderDogs}
            />
            <button id="gloves-button" onClick={this.filterUnderDogs}>
              Absolutely!
            </button>
          </Link>
        </div>
        <div id="pickSafeBet-buttons-container">
          <Link to="/yourTeam" id="yourTeam-link">
            <input
              type="submit"
              id="trophy"
              value=""
              onClick={() => this.filterWinningestTeams()}
            />
            <button
              id="trophy-button"
              onClick={() => this.filterWinningestTeams()}
            >
              No, I Prefer A Reliable Win
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
  league: store.league,
  season: store.season,
  underDogs: store.underDogs,
  winners: store.winners,
  finalPick: store.finalPick
});

export const mapDispatchToProps = dispatch => ({
  addSeason: season => dispatch(addSeason(season)),
  addUnderDogs: teams => dispatch(addUnderDogs(teams)),
  addWinners: teams => dispatch(addWinners(teams)),
  getFinalPick: team => dispatch(getFinalPick(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickMatchUp);

PickMatchUp.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  randomTeam: PropTypes.object,
  season: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  underDogs: PropTypes.arrayOf(PropTypes.object),
  winners: PropTypes.arrayOf(PropTypes.object),
  mapStateToProps: PropTypes.func,
  mapDispatchToProps: PropTypes.func
};
