import React, { Component } from 'react'
import './PickALeague.css'

export default class PickALeague extends Component {
  constructor() {
    super();
    this.state = {
      possibleTeams: [],
      team: "",
      error: ""
    }
  }

  getNFLTeams = (e) => {
    e.preventDefault()
  }

  getNCAATeams = (e) => {
    e.preventDefault()
  }

  render() {
    return (
    <article className="pickLeague">
      <h1 id="pickLeague-text">Let's Get Started, Pick A League!</h1>
        <div id="nfl-buttons-container">
          <input type="submit" id="nfl" value=""/>
          <button id="nfl-button" onClick={(e) => this.getNFLTeams(e)}>NFL</button>
        </div>
        <div id="ncaa-buttons-container">
          <input type="submit" id="ncaa" value=""/>
          <button id="ncaa-button" onClick={(e) => this.getNCAATeams(e)}>NCAA</button>
        </div>
    </article>
    )
  }
}

