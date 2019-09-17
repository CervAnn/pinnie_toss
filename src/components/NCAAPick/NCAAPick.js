import React from "react";
import { connect } from "react-redux";
import "../NCAAPick/NCAAPick.css";
import PropTypes from "prop-types";

export const NCAAPick = ({ randomTeam, finalPick }) => {
  return (
    <section className="NCAAPick">
      <article id="team-name-badge">
        <img id="ncaa-team-badge" src={randomTeam.strTeamBadge || finalPick.strTeamBadge} alt="" />
        <h1 id="ncaa-team-name">
          {randomTeam.strTeam || finalPick.strTeam} {randomTeam.strAlternate || finalPick.strAlternate}
        </h1>
      </article>
    </section>
  );
};

export const mapStateToProps = store => ({
  randomTeam: store.randomTeam,
  finalPick: store.finalPick
});

export default connect(mapStateToProps)(NCAAPick);

NCAAPick.propTypes = {
  randomTeam: PropTypes.object,
  mapStateToProps: PropTypes.func,
  strTeamBadge: PropTypes.string,
  strTeam: PropTypes.string,
  strAlternate: PropTypes.string
};
