import React, { Component } from 'react'
import { connect } from 'react-redux'
import './GenerateTeam.css'
import { pickRandom } from '../actions/index';
import NFLPick from '../components/NFLPick/NFLPick'
import NCAAPick from '../components/NCAAPick/NCAAPick'
import PropTypes from 'prop-types'


export class GenerateTeam extends Component {

  componentDidMount() {
    if (this.props.underDogs.length > 0) {
      let randomIndex = Math.floor(Math.random() * (this.props.underDogs.length))
      let teamId = this.props.underDogs[randomIndex]
      // this.props.teams.find(team => team.id ==)

    } else {
      let randomIndex = Math.floor(Math.random() * (this.props.winners.length))
      let finalTeam = this.props.pickRandom(this.props.winners[randomIndex])
    }
  }


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

export const mapDispatchToProps = dispatch => ({
  pickRandom: team => dispatch(pickRandom(team))
});


export default connect(mapStateToProps)(GenerateTeam);

GenerateTeam.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  league: PropTypes.object,
  underDogs: PropTypes.arrayOf(PropTypes.object),
  winners: PropTypes.arrayOf(PropTypes.object),
  mapStateToProps: PropTypes.func,
}