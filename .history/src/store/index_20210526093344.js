import { createStore } from "redux";

// reducer 纯函数 相当于 mutation+action
function reducer(state, action) {
    /* console.log(action) 
      这里redux初始化的时候会默认执行一次，但是state还是undefined
      所以这里要或一下。
    */
    state = state || {
        count: 100,
    };
}

let store = createStore();
