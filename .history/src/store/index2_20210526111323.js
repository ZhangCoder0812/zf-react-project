import { createStore } from "redux";

function CountReducer(state, action) {
    state = state || {
        count: 100,
        name: "wade",
    };
     
}

function NameReducer(state, action) {
    state = state || {
        count: 100,
        name: "wade",
    };
     
}

let store = createStore(reducer);

export default store;
