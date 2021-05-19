import React, { useState, memo, useCallback } from "react";


function App() {

    return (
        <div>
            App
            <h2>
                {state.count}-{state.name}
            </h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>count +</button>
            <button onClick={() => setState({ ...state, name: state.name + state.count })}>
                name +
            </button>
            <Child fn={fn} />
        </div>
    );
}

export default App;
