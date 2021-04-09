import React, { Component } from "react";
import ReactDom from "react-dom";

import "./assets/style.css";
import { QuestionBox } from "./components/QuestionBox";
import { Result } from "./components/Result";
import quizService from "./quizService";

export class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responseCount: 0,
  };

  async getQuestions() {
    const questions = await quizService();

    this.setState({ questionBank: questions, score: 0, responseCount: 0 });
  }

  computeAnswer(choice, correct) {
    if (choice === correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }

    this.setState({
      responseCount: this.state.responseCount + 1,
    });
  }

  playAgain() {
    this.getQuestions();
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    const hasQuestion = !!this.state.questionBank.length;

    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {hasQuestion &&
          this.state.questionBank.map(
            ({ question, questionId, answers, correct }) => (
              <QuestionBox
                question={question}
                options={answers}
                correct={correct}
                key={questionId}
                selected={(text) => this.computeAnswer(text, correct)}
              />
            )
          )}
        {this.state.responseCount >= 5 && (
          <Result
            score={this.state.score}
            playAgain={this.playAgain.bind(this)}
          />
        )}
      </div>
    );
  }
}

ReactDom.render(<QuizBee />, document.querySelector("#root"));
