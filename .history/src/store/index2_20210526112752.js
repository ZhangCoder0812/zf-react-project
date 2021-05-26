import { createStore, combineReducers } from "redux";

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

// 多个reducer

let RootReducer = combineReducers({
    CountReducer,
    NameReducer,
});

let store = createStore(RootReducer);

export default store;
