import { h } from "preact";
import { connect } from "preact-redux";
import TextQuestion from "../components/TextQuestion";
import { shuffle } from "lodash";

const Quiz = ({ answers, question, correctAnswer }) => {
  const onAnswer = answer => {
    console.log(answer == correctAnswer);
  };

  return (
    <TextQuestion
      question={question}
      time={5}
      answers={answers}
      onAnswer={onAnswer}
    />
  );
};

const mapStateToProps = state => {
  const question = state.quiz.questions[state.quiz.activeQuestion];
  const answers = shuffle([...question.alternatives, question.answer]);

  return {
    answers,
    correctAnswer: question.answer,
    question: question.question
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
