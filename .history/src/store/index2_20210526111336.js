import { createStore, combineReducers } from "redux";

function CountReducer(state, action) {
    state = state || {
        count: 100,
    };
}

function NameReducer(state, action) {
    state = state || {
        name: "wade",
    };
}

let store = createStore(reducer);

export default store;
