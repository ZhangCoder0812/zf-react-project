import React, { useState, useEffect } from "react";
 
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
            {state.count < 30 ? <Child /> : ""}
        </div>
    );
}

export default App;
