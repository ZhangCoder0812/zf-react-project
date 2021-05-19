import React, { useReducer } from "react";

function App() {
    let [state, dispatch] = useReducer((state, action) => {
        return state
    }, {
        name: "wade",
        count: 10,
    });
    let { name, count } = state;
    return (
        <div>
            <h1>
                {name} --- {count}
            </h1>
            <button
                onClick={dispatch({
                    type: "changeName",
                    payload: name + count,
                })}
            >
                name
            </button>
            <button
                onClick={dispatch({
                    type: "changeCount",
                    payload: count + 10,
                })}
            >
                count
            </button>
        </div>
    );
}

export default App;
