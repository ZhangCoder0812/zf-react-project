import { createStore, combineReducers, applyMiddleware } from "./myRedux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import thunk from "../插件原理/my-redux-thunk";
import logger from "./logge中间件"; 
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

let store = createStore(RootReducer, applyMiddleware(thunk, logger)); // 使用多个中间件

export default store;
