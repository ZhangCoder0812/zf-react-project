function mythunk(store) {
  let { dispatch, getState } = store;
  // 这个next就是原本未处理过的dispatch
  return function (next) {
    return function newDispatch(action) {
      if (typeof action === "function") {
        return action(next, getState);
      }
      return next(action);
    };
  };
}

export default mythunk;
