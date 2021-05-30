import * as type from "./actionTypes";

export function add(n) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: type.ADD,
        n: n,
      });
    }, 1000);
  };
}

export function name(n) {
  return {
    type: type.NAME,
    name: n,
  };
}
