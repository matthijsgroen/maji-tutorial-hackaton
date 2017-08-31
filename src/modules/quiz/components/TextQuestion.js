import { h } from "preact";
import Question from "./Question";

const TextQuestion = ({ answers, question, time, onAnswer }) => {
  const onTimeOut = () => onAnswer("");

  return (
    <Question {...{ question, time, onTimeOut }}>
      {answers.map((text, i) => {
        const handler = () => onAnswer(text);
        return <button key={i} type="button" onClick={handler}>{text}</button>;
      })}
    </Question>
  );
};

export default TextQuestion;
