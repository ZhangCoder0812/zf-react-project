import { createStore, combineReducers } from "redux";

function CountReducer(state, action) {
    state = state || {
        count: 100,
    };
    if (action.type === "add") {
        return {
            ...state,
            count: state.count + action.n,
        };
    }
}

function NameReducer(state, action) {
    state = state || {
        name: "wade",
    };
    if (action.type === "name") {
        return {
            ...state,
            name: action.name,
        };
    }
}

let RootReducer = combineReducers(CountReducer,NameReducer)

let store = createStore(reducer);

export default store;
