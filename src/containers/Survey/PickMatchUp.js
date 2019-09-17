import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PickMatchUp.css'
import { addSeason, addUnderDogs, addWinners } from '../../actions/index'
import { fetchSeasonData } from '../../util/apiCalls'
import PropTypes from 'prop-types'

export class PickMatchUp extends Component {
  
  filterUnderDogs = () => {
    let season;
    this.props.league.leagueName === "NFL" ? season = 2019 : season = 1920;
    this.props.addSeason(season)
    fetchSeasonData(season, this.props.league.leagueId)
      .then(data => data.table.filter(team => team.loss > team.win))
      .then(data => this.props.addUnderDogs(data))
      .catch(error => alert(error))
  }

  filterWinningestTeams = () => {
    let season;
    this.props.league.leagueName === "NFL" ? season = 2019 : season = 1920;
    this.props.addSeason(season)
    fetchSeasonData(season, this.props.league.leagueId)
      .then(data => data.table.filter(team => team.loss < team.win))
      .then(data => this.props.addWinners(data))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section className="PickMatchUp">
        <h1 id="pickMatchUp-text">Do you like an underdog?</h1>
        <div id="pickUnderDog-buttons-container">
          <input type="submit" id="gloves" value="" onClick={(e) => this.filterUnderDogs(e)}/>
          <button id="gloves-button" onClick={(e) => this.filterUnderDogs(e)}>Absolutely!</button>
        </div>
        <div id="pickSafeBet-buttons-container">
            <input type="submit" id="trophy" value="" onClick={(e) => this.filterWinningestTeams(e)}/>
            <button id="trophy-button" onClick={(e) => this.filterWinningestTeams(e)}>No, I Prefer A Reliable Win</button>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
  league: store.league,
  season: store.season,
  underDogs: store.underDogs,
  winners: store.winners
})

export const mapDispatchToProps = dispatch => ({
  addSeason: season => dispatch(addSeason(season)),
  addUnderDogs: teams => dispatch(addUnderDogs(teams)),
  addWinners: teams => dispatch(addWinners(teams))
})

export default connect(mapStateToProps, mapDispatchToProps)(PickMatchUp)

PickMatchUp.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  randomTeam: PropTypes.object,
  season: PropTypes.number,
  underDogs: PropTypes.arrayOf(PropTypes.object),
  winners: PropTypes.arrayOf(PropTypes.object),
  mapStateToProps: PropTypes.func,
  mapDispatchToProps: PropTypes.func
}