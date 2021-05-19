import React, { useReducer } from "react";

function App() {
    let [state, dispatch] = useReducer(
        (state, action) => {
            console.log(action,'-------');
            if (action.type == "changeName") {
                return {
                    ...state,
                    name: action.payload,
                };
            }
            if (action.type == "changeCount") {
                return {
                    ...state,
                    count: action.payload,
                };
            }
            return state;
        },
        {
            name: "wade",
            count: 10,
        }
    );
    let { name, count } = state;
    return (
        <div>
            <h1>
                {name} --- {count}
            </h1>
            <button
                onClick={() =>
                    dispatch({
                        type: "changeName",
                        payload: name + "lbj",
                    })
                }
            >
                name +
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: "changeCount",
                        payload: count + 10,
                    })
                }
            >
                count +
            </button>
        </div>
    );
}

export default App;
