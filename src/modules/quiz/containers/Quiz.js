import { h } from "preact";
import { connect } from "preact-redux";
import TextQuestion from "../components/TextQuestion";
import { shuffle } from "lodash";
import { giveAnswer } from "../actions";

const Quiz = ({ answers, question, giveAnswer, gameOver, score, time }) => {
  return gameOver
    ? <div>You scored {score}</div>
    : <TextQuestion
        question={question}
        time={time}
        answers={answers}
        onAnswer={giveAnswer}
      />;
};

const mapStateToProps = state => {
  let currentQuestion = state.quiz.activeQuestion;
  let gameOver = false;

  if (state.quiz.activeQuestion >= state.quiz.questions.length) {
    currentQuestion = 0;
    gameOver = true;
  }

  const question = state.quiz.questions[currentQuestion];
  const answers = shuffle([...question.alternatives, question.answer]);
  
  const time = answers.concat(question.question).join(" ").split(" ").length * 0.3;

  return {
    answers,
    question: question.question,
    gameOver,
    score: state.quiz.score,
    time
  };
};

const mapDispatchToProps = { giveAnswer };

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
