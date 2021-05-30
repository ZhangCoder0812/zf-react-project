let cb = [];
//createStore 不但接受reducer 还接受一个中间件函数
export function createStore(reducer, fn) {
  let state; // 用来存储那些state

  function getState() {
    return JSON.parse(JSON.stringify(state));
  }
  function dispatch(action) {
    state = reducer(state, action);
    cb.forEach((fn) => fn());
  }
  dispatch({ type: "@types/redux.dasdaxa" });
  function subscribe(fn) {
    cb.push(fn);
    return () => {
      cb = cb.filter((item) => item !== fn);
    };
  }
  // 如果使用了中间件 就返回fn的执行结果
  if (typeof fn === "function") {
    return fn(createStore)(reducer);
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export function combineReducers(obj) {
  return function reducer(state, action) {
    state = state || {};
    Object.keys(obj).forEach((key) => {
      state[key] = obj[key](state[key], action);
    });
    return state;
  };
}

/* 
  中间件的执行结果是一个函数 接受参数createStore 
  中间件的执行结果会把原先的dispatch替换，因为原先的dispatch接受的是一个对象
  现在使用thunk之后dispatch接受的是一个函数
*/
export function applyMiddleware(middleWare) {
  // 这个函数就是上面的createStore参数中的 fn
  return function (createStore) {
    // fn的执行结果 因为上面用了中间件所以走到了这里 但是还是要把原本因该正常返回的store对象返回出去
    // 只有createStore执行才会返回store对象 而且需要reducer参数 。 所以这里又包了一层函数
    return function (reducer) {
      // 这里执行createStore没有传中间件 所以上面createStore内部就正常返回store对象了
      let store = createStore(reducer);
      // 下面这两个是看thunk内部 createThunkMiddleware()方法写的
      let temp1 = middleWare(store);
      let newDispatch = temp1(store.dispatch);
      return {
        ...store,
        dispatch: newDispatch, // 替换原有的dispatch
      };
    };
  };
}
