import React, { Component } from "react";
import ReactDom from "react-dom";

import "./assets/style.css";
import quizService from "./quizService";

export class QuizBee extends Component {
  state = {
    questionBank: [],
  };

  async getQuestions() {
    const questions = await quizService();

    this.setState({ questionBank: questions });
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
          this.state.questionBank.map(({ question }) => <h4>{question}</h4>)}
      </div>
    );
  }
}

ReactDom.render(<QuizBee />, document.querySelector("#root"));
