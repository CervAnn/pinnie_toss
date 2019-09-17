import React, {Component} from 'react';
import '../Container/Container.css';
import PickALeague from '../../containers/PickALeague/PickALeague';
import PickAMethod from '../../containers/PickAMethod/PickAMethod';
import PickMatchUp from '../../containers/PickMatchUp/PickMatchUp'
import RandomPick from '../RandomPick/RandomPick';
import GenerateTeam from '../../containers/GenerateTeam/GenerateTeam';
import {Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export class Container extends Component {
  render() {
    return (
      <section className="Container">
        {this.props.teams.length === 0 && 
        <p id="welcome-text">Welcome to Pinnie Toss, an app designed for the casual football fan. Whether 
          you're looking for a team to support for now, for later, or for always,
          Pinnie Toss is here to find you a team to love.</p>}
        <article className="buttonContainer">
            <Switch>
                <Route exact path="/" render={() => <PickALeague />} />
                <Route exact path="/method" render={() => <PickAMethod />} />
                <Route exact path="/randomPick" render={() => <RandomPick />} />
                <Route exact path="/survey" render={() => <PickMatchUp />} />
                <Route exact path="/yourTeam" render={() => <GenerateTeam />} />
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

Container.propTypes = {
  teams: PropTypes.array,
  mapStateToProps: PropTypes.func
}
