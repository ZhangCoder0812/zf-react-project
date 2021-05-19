import React, { useState, useMemo } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child --- {props.count}</>;
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
            <button onClick={() => setState({ ...state, count: state.name + Math.random() })}>name</button>
            <Child count={state.count} />
        </div>
    );
}

export default App;
