import React, { useState, memo, useMemo } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child --- {props.count}</>;
}
Child = memo(Child);

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });

    // 只有当 state.count 发生改变时才会赋予 obj 新的地址。用来缓存对象的地址
    // 保证给子组件传的z
    // 也要配置 memo 一起使用 。
    let obj = useMemo(() => {
        return {
            name: 123,
        };
    }, [state.count]);

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
            <Child obj={obj} />
        </div>
    );
}

export default App;
