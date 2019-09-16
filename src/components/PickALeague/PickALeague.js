import React, { Component } from 'react'
import './PickALeague.css'
import { fetchFootballData } from '../../apiCalls';
import { addTeams } from '../../actions/index'
import { connect } from "react-redux";

class PickALeague extends Component {

  getNFLTeams = (e) => {
    console.log("ho")
    e.preventDefault()
    fetchFootballData()
      .then(teams => addTeams(teams))
  }

  getNCAATeams = (e) => {
    console.log("hey")
    e.preventDefault()
    fetchFootballData()
      .then(data => console.log(data.teams.filter(team => team.idLeague === "4479" && team.strDivision === "FBS")))
  }

  render() {
    return (
    <article className="pickLeague">
      <h1 id="pickLeague-text">Let's Get Started, Pick A League!</h1>
        <div id="nfl-buttons-container">
          <input type="submit" id="nfl" value="" onClick={(e) => this.getNFLTeams(e)}/>
          <button id="nfl-button" onClick={(e) => this.getNFLTeams(e)}>NFL</button>
        </div>
        <div id="ncaa-buttons-container">
          <input type="submit" id="ncaa" value="" onClick={(e) => this.getNCAATeams(e)}/>
          <button id="ncaa-button" onClick={(e) => this.getNCAATeams(e)}>NCAA</button>
        </div>
    </article>
    )
  }
}

  // export const mapStateToProps = store => ({
  //   teams: store.teams
  // })

  export const mapDispatchToProps = dispatch => ({
    addTeams: teams => dispatch(addTeams(teams))
  });

  export default connect(null, mapDispatchToProps)(PickALeague);

