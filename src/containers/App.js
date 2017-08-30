import { h } from "preact";
import Question from "src/modules/quiz/components/question";

const App = () => (
  <Question question="Welke is de eerste button?">
    <button type="button">Eerste button</button>
    <button type="button">Tweede button</button>
    <button type="button">Derde button</button>
  </Question>
);

export default App;
