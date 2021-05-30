import * as type from "./actionTypes";

export function CounterReducer(state, action) {
  state = state || {
    count: 100,
  };
  switch (action.type) {
    case type.ADD:
      return {
        ...state,
        count: state.count + action.n,
      };
    default:
      return {
        ...state,
      };
  }
}

export function NameReducer(state, action) {
  state = state || {
    name: "wade",
  };
  switch (action.type) {
    case type.NAME:
      return {
        ...state,
        name: state.name + action.name,
      };
    default:
      return {
        ...state,
      };
  }
}
