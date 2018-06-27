import React, { useState } from "react";
import "./styles.css";
import { displayScore, handleClick } from "./utils";

export const Score = ({ playerName }) => {
  const [score, updateScore] = useState(0);

  return (
    <div className="Score__root">
      <h4 className="Score__h4">Player {playerName}</h4>
      <p className="Score__score">{displayScore(score)}</p>
      <button
        onClick={handleClick({ score, updateScore })}
        className="Score__button"
      >
        +
      </button>
    </div>
  );
};

export default Score;
