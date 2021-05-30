import * as types from "./actionTypes";
export function add(n) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: types.ADD,
        n: n,
      });
    }, 2000);
  };
}

export function name(val) {
  return function (dispatch) {
    dispatch({
      type: types.NAME,
      name: val,
    });
  };
}
