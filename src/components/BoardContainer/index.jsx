import React, { Component } from 'react';
import Board from '../Board';

export class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [null, null, null, null, null, null, null, null, null],
      isXsTurn: true,
    };

    this.checkForWin = this.checkForWin.bind(this);
    this.diagonalRows = this.diagonalRows.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hasSomeoneWon = this.hasSomeoneWon.bind(this);
    this.horizontalRows = this.horizontalRows.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
    this.reinitializeState = this.reinitializeState.bind(this);
    this.turn = this.turn.bind(this);
    this.verticalRows = this.verticalRows.bind(this);
  }

  reinitializeState() {
    this.setState({
      cells: [null, null, null, null, null, null, null, null, null],
      isXsTurn: true,
    });
  }

  displayEndgameMessage({ result }) {
    alert(`${result} won! Click OK to play again.`);
  }

  isGameOver() {
    const { hasSomeoneWon, turn } = this;
    if (turn() < 5) {
      return false;
    }

    return hasSomeoneWon();
  }

  hasSomeoneWon() {
    const { checkForWin, diagonalRows, horizontalRows, verticalRows } = this;
    return (
      checkForWin({ rows: diagonalRows() }) ||
      checkForWin({ rows: horizontalRows() }) ||
      checkForWin({ rows: verticalRows() })
    );
  }

  checkForWin({ rows }) {
    const { playerHasTakenARow } = this;
    return ['X', 'O'].find(player => playerHasTakenARow({ player, rows }));
  }

  playerHasTakenARow({ rows, player }) {
    return rows
      .map(row => row.filter(cell => cell === player))
      .some(row => row.length === 3);
  }

  verticalRows() {
    return [[], [], []].map((_, rowIndex) =>
      this.state.cells.filter(
        (_, cellIndex) => (cellIndex - rowIndex) % 3 === 0,
      ),
    );
  }

  horizontalRows() {
    return [[], [], []].map((_, rowIndex) =>
      this.state.cells.filter(
        (_, cellIndex) =>
          cellIndex >= 3 * rowIndex && cellIndex < 3 * rowIndex + 3,
      ),
    );
  }

  diagonalRows() {
    const { cells } = this.state;
    return [
      [0, 4, 8].map(index => cells[index]),
      [2, 4, 6].map(index => cells[index]),
    ];
  }

  handleClick({ target }) {
    const { cells, isXsTurn } = this.state;
    const cellNumber = target.getAttribute('data-target-index');
    if (!cells[cellNumber]) {
      cells[cellNumber] = this.marker();
      this.setState({
        cells,
        isXsTurn: !isXsTurn,
      });
    }
  }

  turn() {
    return this.state.cells.filter(cell => cell).length;
  }

  marker() {
    return this.state.isXsTurn ? 'X' : 'O';
  }

  componentDidUpdate() {
    const { displayEndgameMessage, isGameOver, reinitializeState } = this;
    const result = isGameOver();
    if (result) {
      displayEndgameMessage({ result });
      reinitializeState();
    }
  }

  render() {
    const { handleClick } = this;
    const { cells, isXsTurn } = this.state;

    return (
      <Board cells={cells} handleClick={handleClick} isXsTurn={isXsTurn} />
    );
  }
}

export default BoardContainer;
