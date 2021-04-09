import React, { useState } from "react";

export const QuestionBox = ({ question, options, selected, correct }) => {
  const [choice, setChoice] = useState(null);

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
          key={`${index}-${text.replace(/\s/gi, "_")}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
