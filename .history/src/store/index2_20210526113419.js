import { createStore, combineReducers } from "redux";
import * as types from './actionTypes'

function CountReducer(state, action) {
    console.log("我是 CountReducer");
    state = state || {
        count: 100,
    };
    if (action.type === "add") {
        return {
            ...state,
            count: state.count + action.n,
        };
    }
    if (action.type === types.TEST) {
        console.log(" test 避免action重名 将type使用常量");
    }
    return {
        ...state,
    };
}

function NameReducer(state, action) {
    console.log("我是 NameReducer");
    state = state || {
        name: "wade",
    };
    if (action.type === "name") {
        return {
            ...state,
            name: action.name,
        };
    }
    // 不同reducer中的action若名字相同则都会执行
    if (action.type === "add") {
        console.log("我是NameReducer中的 action -> add");
    }
    return {
        ...state,
    };
}

//  多个reducer情况下 执行任意一个reducer中的action 所有的reducer都会执行
//  不同reducer中的action若名字相同则都会执行

let RootReducer = combineReducers({
    CountReducer,
    NameReducer,
});

let store = createStore(RootReducer);

export default store;
