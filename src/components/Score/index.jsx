import React, { useState } from "react";
import "./styles.css";

export const Score = ({ playerName }) => {
  const [score, updateScore] = useState(0);

  const handleClick = () => {
    const nextScore = score + 1;
    updateScore(nextScore);
  };

  const displayScore = String(score);

  return (
    <div className="Score__root">
      <h4 className="Score__h4">Player {playerName}</h4>
      <p className="Score__score">{displayScore}</p>
      <button onClick={handleClick} className="Score__button">
        +
      </button>
    </div>
  );
};

export default Score;
