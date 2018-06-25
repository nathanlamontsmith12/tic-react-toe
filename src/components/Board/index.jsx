import React, { Fragment } from 'react';
import './styles.css';

const text = {
  x: "It's X's Turn",
  o: "It's O's Turn",
};

const Board = ({ cells, handleClick, isXsTurn }) => (
  <Fragment>
    <p className="Board__indicator">{isXsTurn ? text.x : text.o}</p>
    <div className="Board">
      {cells.map((cell, index) => (
        <div
          className="Board__cell"
          data-target-index={index}
          key={index}
          onClick={handleClick}
          value={cell}
        >
          {cell || '-'}
        </div>
      ))}
    </div>
  </Fragment>
);

export default Board;
