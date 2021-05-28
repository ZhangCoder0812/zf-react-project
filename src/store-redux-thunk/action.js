import * as types from "./actionTypes";
export function add(n) {
  /*  这样写不太靠谱 因为action要求立即返回一个普通对象  
  setTimeout(() => {
    return {
      type: types.ADD,
      n: n,
    };
  }, 2000); */

  // 使用redux-thunk 支持action是一个函数 那么这里就可以使用异步方法了
  // redux中配置中间件
  return function (dispatch) {
    setTimeout(() => {
      dispatch({
        type: types.ADD,
        n: n,
      });
    }, 2000);
  };
}
