import { h } from "preact";
import Question from "./Question";

const TextQuestion = ({ answers, question, time, onAnswer }) => {
  return (
    <Question question={question} time={time}>
      {answers.map((text, i) => {
        const handler = () => onAnswer(text);
        return <button key={i} type="button" onClick={handler}>{text}</button>;
      })}
    </Question>
  );
};

export default TextQuestion;
