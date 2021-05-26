import { createStore } from "redux";

// reducer 纯函数 相当于 mutation+action
function reducer(state,action){
    state= state || {
        count:100
    }
}

let store = createStore()