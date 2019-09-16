import React from 'react'
import { connect } from 'react-redux'
import './RandomPick.css'

export const RandomPick = ({randomTeam}) => {
  return (
    <section className="RandomPick">
      <h2>Congratulations! You are now a proud fan of the:</h2>
      {randomTeam.strLeague === "NFL" ? 
      <h1>{`${randomTeam.strTeam}`}</h1>
      :
      <h1>{`${randomTeam.strTeam} ${randomTeam.strAlternate}`}</h1>
      }
    </section>
  )
}

export const mapStateToProps = store => ({
  teams: store.teams,
  randomTeam: store.randomTeam
})


export default connect(mapStateToProps)(RandomPick);