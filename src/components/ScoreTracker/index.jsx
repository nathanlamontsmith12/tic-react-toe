import React from "react";
import Score from "../Score";
import "./styles.css";

export const ScoreTracker = () => {
  return (
    <div className="ScoreTracker__root">
      <h3 className="ScoreTracker__h3">Score</h3>
      <Score playerName={"O"}></Score>
      <Score playerName={"X"}></Score>
    </div>
  );
};

export default ScoreTracker;
