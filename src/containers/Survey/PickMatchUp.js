import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PickMatchUp.css'

export class PickMatchUp extends Component {
  render() {
    return (
      <section className="PickMatchUp">
        <h1 id="pickMatchUp-text">Do you like an underdog?</h1>
        <div id="pickUnderDog-buttons-container">
          <input type="submit" id="gloves" value=""/>
          <button id="gloves-button">Absolutely!</button>
        </div>
        <div id="pickSafeBet-buttons-container">
            <input type="submit" id="trophy" value=""/>
            <button id="trophy-button" >No, I Prefer A Reliable Win</button>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  teams: store.teams
})

export default connect(mapStateToProps)(PickMatchUp)