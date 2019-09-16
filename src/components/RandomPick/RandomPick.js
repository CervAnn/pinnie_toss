import React from 'react'
import { connect } from 'react-redux'
import NFLPick from '../NFLPick/NFLPick'
import NCAAPick from '../NCAAPick/NCAAPick'
import './RandomPick.css'

export const RandomPick = ({randomTeam}) => {
  return (
    <section className="RandomPick">
      <h2>Congratulations! You are now a proud fan of the:</h2>
      {randomTeam.strLeague === "NFL" ? <NFLPick /> : <NCAAPick />}
    </section>
  )
}

export const mapStateToProps = store => ({
  teams: store.teams,
  randomTeam: store.randomTeam
})


export default connect(mapStateToProps)(RandomPick);