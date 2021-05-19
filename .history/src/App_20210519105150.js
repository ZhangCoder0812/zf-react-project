import React, { useState, memo } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child --- {props.count}</>;
}

Child = memo(Child); // 用memo包裹组件 处理过的组件只会在父组件传进来的数据发生变化才会执行
// 类似于 PureComponent
function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });
    let obj = {
        count: state.count,
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
            <Child count={state.count} />
            <Child obj={state.count} />
        </div>
    );
}

export default App;
