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

    // 类似于 useMemo 传入的是一个函数 也会重新出发子组件更新
    // 用useCallback解决 当然也可以将函数放入对象中用useMemo解决 但是不合理 函数不经常变

    let fn = useCallback(() => {
        console.log("fn");
    }, []); //  // 为空数组的话就会执行一次 以后都不会执行 这个变量就一直使用初次的地址
    // 子组件也就一直不会更新了

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
