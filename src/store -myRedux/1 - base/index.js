// import { createStore } from "redux";
import { createStore } from "./myRedux";
 
function reducer(state, action) {
   
    state = state || {
        count: 100,
        name: "wade",
    };
    switch (action.type) {
        case "add":
            return { 
                ...state,  
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
