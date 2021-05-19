import React, { useState, memo, useMemo } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child --- {props.count}</>;
}

Child = memo(Child); // 

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });
    let obj = useMemo()
    return (
        <div>
            App
            <h2>
                {state.count}-{state.name}
            </h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
            <Child obj={obj} />
        </div>
    );
}

export default App;
