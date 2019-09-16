import React from 'react'
import '../Container/Container.css'
import PickALeague from '../PickALeague/PickALeague'
import PickAMethod from '../PickAMethod/PickAMethod'
import RandomPick from '../RandomPick/RandomPick'
import {Switch, Route} from 'react-router-dom'

export const Container = () => {
  return (
    <section className="Container">
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

export default Container
