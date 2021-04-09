import React from "react";

export const Result = ({ score, playAgain }) => {
  return (
    <div className="result-box">
      You scored {score}/5{" "}
      <button className="play-again-btn" onClick={playAgain}>
        Play again!
      </button>
    </div>
  );
};
