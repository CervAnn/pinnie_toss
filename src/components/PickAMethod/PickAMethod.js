import React, { Component } from 'react'
import './PickAMethod.css'
import { pickRandom } from '../../actions/index'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

class PickAMethod extends Component {

  randomTeam = (e) => {
    e.preventDefault()
    let randomIndex = Math.floor(Math.random() * (this.props.teams.length))
    console.log(this.props.teams[randomIndex])
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
          <input type="submit" id="light-survey" value=""/>
          <button id="lightSurvey-button" >Light Questionnaire</button>
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


