import React, { useState, useEffect } from "react";

function App() {
    let [state, setState] = useState({
        count: 100,
        name: "wade",
    });

    useEffect(() => {
        console.log("ok");
    }, []); // 第二个参数为空数组 相当于componentDidMount 只会执行一次

    useEffect(() => {
      console.log("ok1");
  }); // 第二个参数不写 每次都会执行 

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
