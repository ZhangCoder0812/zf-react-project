import React, { useReducer } from "react";

function App() {
    let [state, dispatch] = useReducer((state, action) => {}, {
        name: "wade",
        count: 10,
    });
    let { name, count } = state;
    return (
        <div>
            <h1>
                {name} --- {count}
            </h1>
            <button onClick={
                dispatch({
                    type:'name',
                    
                })
            }>name + </button>
            <button onClick={}>count + </button>
        </div>
    );
}

export default App;
