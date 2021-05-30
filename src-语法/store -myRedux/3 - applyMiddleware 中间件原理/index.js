import { createStore, combineReducers, applyMiddleware } from "./myRedux";
import thunk from "redux-thunk";
import * as types from "./actionTypes";

function CountReducer(state, action) {
  state = state || {
    count: 100,
  };
  if (action.type === types.ADD) {
    return {
      ...state,
      count: state.count + action.n,
    };
  }
  return {
    ...state,
  };
}

function NameReducer(state, action) {
  state = state || {
    name: "wade",
  };
  if (action.type === types.NAME) {
    return {
      ...state,
      name: action.name + Math.random(),
    };
  }
  return {
    ...state,
  };
}

let RootReducer = combineReducers({
  CountReducer,
  NameReducer,
});

let store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
