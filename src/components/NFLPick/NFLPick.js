import React from 'react'
import { connect } from 'react-redux'
import '../NFLPick/NFLPick.css'


export const NFLPick = ({randomTeam}) => {
  return (
    <section className="NFLPick">
      <article id="team-name-badge">
        <img id="nfl-team-badge" src={randomTeam.strTeamBadge} alt=""/>
        <h1>{randomTeam.strTeam}</h1>
      </article>
    </section>
  )
}

export const mapStateToProps = store => ({
  randomTeam: store.randomTeam
})

export default connect(mapStateToProps)(NFLPick);