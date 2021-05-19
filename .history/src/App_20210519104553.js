import React, { useState, useMemo } from "react";
 
function Child() {
    useEffect(() => {
        console.log("Child 加载完成");
        return () => {
            console.log("Child 组件销毁  ");
        };
    }, []);

    return <>Child</>;
}

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });

 nsole.log("-------重新渲染完成-------");

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
