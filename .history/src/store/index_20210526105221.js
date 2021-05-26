import { createStore } from "redux";

// reducer 纯函数 相当于 mutation+action
function reducer(state, action) {
    /* console.log(action) 
      这里redux初始化的时候会默认执行一次，但是state还是undefined
      所以这里要或一下。避免下面state点的时候报错。
      也可以这样写
      if(!state) return {
          count: 100,
      }
      或者：
      if(!state){
           state= {
          count: 100,
        }
      }
      不能直接这样，这样写第二次以后都用的是初始的state 每次都执行reducer 重新赋值了
      state = {
        count: 100,
        name: "wade",
      };
    */
    state = state || {
        count: 100,
        name: "wade",
    };
    switch (action.type) {
        case "add":
            return {
                ...state, // 这里要解构一下之前的state 不然会被覆盖
                count: state.count + action.n,
            };
        case "name":
            return {
                ...state,
                name: action.name ,
            };
        default:
            return {
                ...state,
            };
    }
}

let store = createStore(reducer);

export default store;
