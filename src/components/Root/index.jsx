import React from 'react';
import './styles.css';
import BoardContainer from '../BoardContainer';

const Root = () => (
  <div className="Root">
    <h1 className="Root__h1">
      tic
      <p className="Root__react">REACT</p>
      toe
    </h1>
    <BoardContainer />
  </div>
);

export default Root;
