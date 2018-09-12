import React from 'react';
import './styles.css';

export const Cell = ({ value, index, handleClick }) => (
  <div className="Board__cell" data-target-index={index} onClick={handleClick}>
    {value || '-'}
  </div>
);

export default Cell;
