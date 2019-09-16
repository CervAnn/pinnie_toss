import React from 'react'
import '../Container/Container.css'
import PickALeague from '../PickALeague/PickALeague'

export const Container = () => {
  return (
    <section className="Container">
      <article className="buttonContainer">
        <PickALeague />
      </article>
    </section>
  )
}

export default Container
