import React, {Component} from 'react'
import '../Container/Container.css'
import PickALeague from '../PickALeague/PickALeague'
import PickAMethod from '../PickAMethod/PickAMethod'
import RandomPick from '../RandomPick/RandomPick'
import {Switch, Route} from 'react-router-dom'
import { connect } from "react-redux";
 

export class Container extends Component {
  render() {
    return (
      <section className="Container">
        {this.props.teams.length === 0 && 
        <p id="welcome-text">Welcome to Pinnie Toss, a game for the casual football fan. Whether 
          you're looking for a team to support for now, for later, or for always,
          Pinnie Toss is here to help.</p>}
        <article className="buttonContainer">
            <Switch>
                <Route exact path="/" render={() => <PickALeague />} />
                <Route exact path="/method" render={() => <PickAMethod />} />
                <Route exact path="/randomPick" render={() => <RandomPick />} />
            </Switch>
        </article>
      </section>
    )
  }
}

export const mapStateToProps = store => ({
  teams: store.teams,
})

export default connect(mapStateToProps)(Container)
