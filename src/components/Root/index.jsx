import React from "react";
import "./styles.css";
import BoardContainer from "../BoardContainer";
import ScoreTracker from "../ScoreTracker";

export const Root = () => (
  <div className="Root">
    <ScoreTracker />
    <h1 className="Root__h1">
      tic
      <p className="Root__react">REACT</p>
      toe
    </h1>
    <BoardContainer />
  </div>
);

export default Root;
