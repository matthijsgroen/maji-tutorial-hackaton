import { createStore, combineReducers } from "redux";
import { quiz } from "src/modules/quiz/reducer";

const rootReducer = combineReducers({
  quiz
  // additional reducers would be added here
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

window.store = store;

export default store;
