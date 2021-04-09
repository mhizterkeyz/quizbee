import React, { useState } from "react";

const shuffle = (array) => {
  const arrayClone = [...array];
  const shuffledArray = [];

  while (arrayClone.length > 0) {
    const [item] = arrayClone.splice(
      Math.floor(Math.random() * arrayClone.length),
      1
    );

    shuffledArray.push(item);
  }

  return shuffledArray;
};

export const QuestionBox = ({ question, options: opt, selected, correct }) => {
  const [choice, setChoice] = useState(null);
  const [options] = useState(shuffle(opt));

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {options.map((text, index) => (
        <button
          className={`answerBtn ${
            choice && text === correct ? "success" : ""
          } ${choice && text === choice && choice !== correct ? "danger" : ""}`}
          onClick={() => {
            if (!choice) {
              selected(text);
              setChoice(text);
            }
          }}
          key={`${index}-${Math.random()}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
