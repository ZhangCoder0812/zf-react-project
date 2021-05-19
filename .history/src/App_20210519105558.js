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
    let obj = {
        name: 123,
    };
    return (
        <div>
            App
            <h2>
                {state.count}-{state.name}
            </h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
            <button onClick={() => setState({ ...state, name: state.name + state.count })}>
                name
            </button>
            {/* <Child count={state.count} /> */}
            <Child obj={obj} />
        </div>
    );
}

export default App;
