export const handleClick = ({ updateScore, score }) => () => {
  const nextScore = score + 1;
  updateScore(nextScore);
};

export const displayScore = score => String(score);
