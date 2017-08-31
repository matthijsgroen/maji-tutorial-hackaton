import { h } from "preact";
import { connect } from "preact-redux";
import TextQuestion from "../components/TextQuestion";
import { shuffle } from "lodash";
import { giveAnswer } from "../actions";

const Quiz = ({ answers, question, giveAnswer, gameOver, score, maxScore }) => {
  return gameOver
    ? <div>You scored {score} of {maxScore}</div>
    : <TextQuestion
        question={question}
        time={5}
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
  const maxScore = state.quiz.questions
    .map(q => q.points)
    .reduce((result, points) => result + points, 0);

  return {
    answers,
    question: question.question,
    gameOver,
    score: state.quiz.score,
    maxScore
  };
};

const mapDispatchToProps = { giveAnswer };

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
