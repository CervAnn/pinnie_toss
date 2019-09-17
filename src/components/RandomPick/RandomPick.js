import React from "react";
import { connect } from "react-redux";
import NFLPick from "../NFLPick/NFLPick";
import NCAAPick from "../NCAAPick/NCAAPick";
import "./RandomPick.css";
import PropTypes from "prop-types";

export const RandomPick = ({ league }) => {
  return (
    <section className="RandomPick">
      <h2 id="randomPick-text">
        Congratulations! Today you're a fan to the:
      </h2>
      {league.leagueName === "NFL" ? <NFLPick /> : <NCAAPick />}

    </section>
  );
};

export const mapStateToProps = store => ({
  league: store.league
});

export default connect(mapStateToProps)(RandomPick);

RandomPick.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  randomTeam: PropTypes.object,
  strLeague: PropTypes.string
};
