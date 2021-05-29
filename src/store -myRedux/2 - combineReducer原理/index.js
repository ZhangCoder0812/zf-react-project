import { createStore, combineReducers } from "./myRedux";

function CountReducer(state, action) {
  state = state || {
    count: 100,
  };
  if (action.type === "add") {
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
  if (action.type === "name") {
    return {
      ...state,
      name: action.name,
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

let store = createStore(RootReducer);

export default store;
