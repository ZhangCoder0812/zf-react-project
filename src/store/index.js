import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { CounterReducer, NameReducer } from "./reducer";

let rootReducer = combineReducers({
  CounterReducer,
  NameReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
