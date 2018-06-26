import React from 'react';
import './styles.css';

const Cell = ({ cell, index, handleClick }) => (
  <div
    className="Board__cell"
    data-target-index={index}
    key={index}
    onClick={handleClick}
    value={cell}
  >
    {cell || '-'}
  </div>
);

export default Cell;
