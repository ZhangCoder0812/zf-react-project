import { createStore, applyMiddleware } from "redux";
import * as types from "./actionTypes";
import thunk from "redux-thunk";

function CountReducer(state, action) {
  state = state || {
    count: 100,
  };
  if (action.type === types.ADD) {
    // 这里不能放异步 因为返回state必须是同步的 不会等待异步
    // setTimeout(() => {}, 2000);
    return {
      ...state,
      count: state.count + action.n,
    };
  }

  return {
    ...state,
  };
}

let store = createStore(CountReducer, applyMiddleware(thunk));

export default store;
