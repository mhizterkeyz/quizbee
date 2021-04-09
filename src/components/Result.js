import React from "react";

export const Result = ({ score, playAgain }) => {
  return (
    <div className="score-board">
      <div className="score">You scored {score}/5</div>
      <button className="playBtn" onClick={playAgain}>
        Play again!
      </button>
    </div>
  );
};
