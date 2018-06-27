import React from 'react';
import Cell from '../Cell';
import './styles.css';

export const text = {
  x: "It's X's Turn",
  o: "It's O's Turn",
};

export const Board = ({ cells, handleClick, isXsTurn }) => (
  <div className="Board">
    <p className="Board__indicator">{isXsTurn ? text.x : text.o}</p>
    <div className="Board__cells">
      {cells.map((cell, index) => (
        <Cell
          handleClick={handleClick}
          index={index}
          key={index}
          value={cell}
        />
      ))}
    </div>
  </div>
);

export default Board;
