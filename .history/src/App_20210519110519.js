import React, { useState, memo, useCallback } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child</>;
}
Child = memo(Child);

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });

    let fn = () => {
        console.log("fn");
    };

    return (
        <div>
            App
            <h2>
                {state.count} 
            </h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
            <Child fn={fn} />
        </div>
    );
}

export default App;
