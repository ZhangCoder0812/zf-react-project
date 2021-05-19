import React, { useState, useMemo } from "react";

function Child() {
    console.log("--- Child 渲染 ---");
    return <>Child</>;
}

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });

    return (
        <div>
            App
            <h2>{state.count}</h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
            <Child  />
        </div>
    );
}

export default App;
