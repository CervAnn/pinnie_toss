import React from 'react'
import './PickALeague.css'
import { fetchFootballData } from '../../apiCalls';
import { addTeams } from '../../actions/index'
import { connect } from "react-redux";

const PickALeague = () => {

  const getNFLTeams = (e) => {
    console.log("ho")
    e.preventDefault()
    fetchFootballData()
      .then(data => addTeams(data))
  }

  const getNCAATeams = (e) => {
    console.log("hey")
    e.preventDefault()
    fetchFootballData()
      .then(data => console.log(data.teams.filter(team => team.idLeague === "4479" && team.strDivision === "FBS")))
  }
    return (
    <article className="pickLeague">
      <h1 id="pickLeague-text">Let's Get Started, Pick A League!</h1>
        <div id="nfl-buttons-container">
          <input type="submit" id="nfl" value="" onClick={(e) => getNFLTeams(e)}/>
          <button id="nfl-button" onClick={(e) => getNFLTeams(e)}>NFL</button>
        </div>
        <div id="ncaa-buttons-container">
          <input type="submit" id="ncaa" value="" onClick={(e) => getNCAATeams(e)}/>
          <button id="ncaa-button" onClick={(e) => getNCAATeams(e)}>NCAA</button>
        </div>
    </article>
    )
  }

  export const mapDispatchToProps = dispatch => ({
    addAlbums: teams => dispatch(addTeams(teams))
  });

  export default PickALeague;

