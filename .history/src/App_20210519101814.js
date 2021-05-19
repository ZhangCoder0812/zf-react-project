import React, { useState, useEffect } from "react";

function App() {
    let [state, setState] = useState({
        count: 100,
        name: "wade",
    });

    useEffect(() => {
        console.log("ok");
    }, []);

    console.log("1");

    return (
        <div>
            App
            <h2>{state.count}</h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
        </div>
    );
}

export default App;
