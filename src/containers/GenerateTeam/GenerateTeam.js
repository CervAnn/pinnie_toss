import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GenerateTeam.css'
import NFLPick from '../../components/NFLPick/NFLPick'
import NCAAPick from '../../components/NCAAPick/NCAAPick'
import PropTypes from 'prop-types'


export class GenerateTeam extends Component {

  render() {
    return (
      <section className="GenerateTeam">
        <h2 id="generateTeam-text">Congratulations! You are now a proud fan of the:</h2>
        {this.props.randomTeam.strLeague === "NFL" ? <NFLPick /> : <NCAAPick />}
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
  randomTeam: store.randomTeam,
  league: store.league,
  season: store.season,
  underDogs: store.underDogs,
  winners: store.winners
})

export default connect(mapStateToProps)(GenerateTeam);

GenerateTeam.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  league: PropTypes.object,
  underDogs: PropTypes.arrayOf(PropTypes.object),
  winners: PropTypes.arrayOf(PropTypes.object),
  mapStateToProps: PropTypes.func,
}