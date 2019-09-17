import React, { Component } from 'react';
import './PickAMethod.css';
import { pickRandom } from '../../actions/index';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


export class PickAMethod extends Component {

  randomTeam = (e) => {
    e.preventDefault()
    let randomIndex = Math.floor(Math.random() * (this.props.teams.length))
    this.props.pickRandom(this.props.teams[randomIndex])
    }

  

  render() {
    if (this.props.randomTeam.strTeam) {
      return <Redirect push to="/randomPick" />
    }
    return (
    <article className="pickMethod">
      <h1 id="pickMethod-text">Would you like to pick a random team, or narrow down your options with a few questions?</h1>
        <div id="getRandom-buttons-container">
          <input type="submit" id="magic-ball" value="" onClick={(e) => this.randomTeam(e)}/>
          <button id="getRandom-button" onClick={(e) => this.randomTeam(e)}>Get Random Team</button>
        </div>
        <div id="lightSurvey-buttons-container">
          <Link to="/survey" id="survey-pt1-link">
          <input type="submit" id="light-survey" value=""/>
          <button id="lightSurvey-button" >Light Questionnaire</button>
          </Link>
        </div>
    </article>
    )
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
  randomTeam: store.randomTeam
})

export const mapDispatchToProps = dispatch => ({
  pickRandom: team => dispatch(pickRandom(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(PickAMethod);

PickAMethod.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  randomTeam: PropTypes.object,
  mapStateToProps: PropTypes.func,
  mapDispatchToProps: PropTypes.func
}

