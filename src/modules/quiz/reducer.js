import { GIVE_ANSWER } from "./constants";

const initialState = {
  activeQuestion: 0,
  score: 0,
  questions: [
    {
      question: "Welke?",
      answer: "Deze button",
      alternatives: ["Deze niet", "Ook niet", "Nope, niet deze"],
      points: 10
    },
    {
      question: "En nou?",
      answer: "Deze knop",
      alternatives: ["Maar deze niet", "En deze ook niet", "Nee, niet deze"],
      points: 15
    }
  ]
};

export const quiz = (state = initialState, action) => {
  if (action.type === GIVE_ANSWER) {
    const q = state.questions[state.activeQuestion];
    let points = 0;

    if (q.answer === action.answer) {
      points = q.points;
    }

    return {
      ...state,
      score: state.score + points,
      activeQuestion: state.activeQuestion + 1
    };
  }
  return state;
};
