import { createStore } from "redux";

// reducer 纯函数 相当于 mutation+action
function reducer(state, action) {
  
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
                name: action.name,
            };
        default:
            return {
                ...state,
            };
    }
}

let store = createStore(reducer);

export default store;
