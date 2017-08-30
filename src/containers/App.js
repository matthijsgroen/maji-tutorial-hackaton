import { h } from "preact";
import TextQuestion from "src/modules/quiz/components/TextQuestion";

const App = () => {
  const answers = ["Eerste button", "Tweede button", "Derde button"];

  const onAnswer = answer => {
    // console.log(answer);
  };

  return (
    <TextQuestion
      question="Welke?"
      time={5}
      answers={answers}
      onAnswer={onAnswer}
    />
  );
};

export default App;
