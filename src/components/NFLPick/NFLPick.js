import React from "react";
import { connect } from "react-redux";
import "../NFLPick/NFLPick.css";
import PropTypes from "prop-types";

export const NFLPick = ({ randomTeam, finalPick }) => {
  return (
    <section className="NFLPick">
      <article id="team-name-badge">
        <img id="nfl-team-badge" src={randomTeam.strTeamBadge || finalPick.strTeamBadge} alt="" />
        <h1 id="nfl-team-name">{randomTeam.strTeam || finalPick.strTeam}</h1>
      </article>
    </section>
  );
};

export const mapStateToProps = store => ({
  randomTeam: store.randomTeam,
  finalPick: store.finalPick
});

export default connect(mapStateToProps)(NFLPick);

NFLPick.propTypes = {
  randomTeam: PropTypes.object,
  mapStateToProps: PropTypes.func,
  strTeamBadge: PropTypes.string,
  strTeam: PropTypes.string
};
