/* 

  redux 导出一个createStore方法，createStore执行返回一个对象包含三个方法  

*/
let cb = [];

export function createStore(reducer) {
  let state; // 用来存储那些state

  function getState() {
    return JSON.parse(JSON.stringify(state));
  }

  // redux内部会先执行一次reducer，dispatch执行会触发reducer执行
  // reducer 的返回值是一个对象 用来更新state
  // reducer 执行 satate 更新 再让cb中用户存的函数执行 然后视图就刷新了
  function dispatch(action) {
    state = reducer(state, action);
    cb.forEach((fn) => fn());
  }
  dispatch({ type: "@types/redux.dasdaxa" });

  // subscribe接受一个函数 将其保存起来
  // subscribe返回值一个函数 用于将添加的fn移除
  function subscribe(fn) {
    cb.push(fn);
    return () => {
      cb = cb.filter((item) => item !== fn);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
