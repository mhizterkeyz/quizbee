import React, { useState } from "react";

export const QuestionBox = ({ question, options, selected }) => {
  const [answers, setAnswers] = useState(options);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answers.map((text, index) => (
        <button
          className="answerBtn"
          onClick={() => {
            setAnswers([text]);
            selected(text);
          }}
          key={`${index}-${text.replace(/\s/gi, "_")}`}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
