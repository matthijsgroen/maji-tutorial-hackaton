import { GIVE_ANSWER } from "./constants";

const initialState = {
  activeQuestion: 0,
  score: 0,
  questions: [
    {
      question: "What is the stack of Maji 3.x?",
      answer: "Preact + Redux",
      alternatives: [
        "React + Redux",
        "Backbone + Marionette",
        "Java + Springboot",
        "jQuery"
      ],
      points: 10
    },
    {
      question: "What language is used in Maji 3.x?",
      answer: "Latest Ecmascript + Babel",
      alternatives: ["Javascript 5", "Coffeescript", "jQuery"],
      points: 15
    },
    {
      question: "What do we use for asset packaging?",
      answer: "Webpack",
      alternatives: ["Grunt", "Rollup", "Broccoli"],
      points: 15
    },
    {
      question: "How do we mutate state?",
      answer: "We don't mutate the state",
      alternatives: ["We reassign the changing parts", "We change it"],
      points: 15
    },
    {
      question: "What IDE is best for Maji?",
      answer: "Maji does not care",
      alternatives: ["VIM", "Visual Studio", "XCode", "Eclipse"],
      points: 15
    },
    {
      question: "TDD?",
      answer: "Yes",
      alternatives: ["No"],
      points: 15
    },
    {
      question: "What is the most sensible approach?",
      answer: "Some smart Containers, mostly dumb Components",
      alternatives: [
        "All smart Containers",
        "One smart Container, rest dumb Components"
      ],
      points: 15
    },
    {
      question: "This quiz is...",
      answer: "Best quiz ever!",
      alternatives: ["OK", "Lame!"],
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
