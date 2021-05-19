import React, { useState, memo, useMemo } from "react";

function Child(props) {
    console.log("--- Child 渲染 ---");
    return <>Child </>;
}
Child = memo(Child);

function App() {
    let [state, setState] = useState({
        count: 0,
        name: "wade",
    });

    // 只有当 state.count 发生改变时才会赋予 obj 新的地址。用来缓存对象的地址
    // 保证给子组件传的值是对象时候 依赖不发生改变就不会重新渲染
    // 也要配置 memo 一起使用 。
    let obj = useMemo(() => {
        return {
            name: 123,
        };
    }, [state.count]); // 只有state.count变化的时候传入的这个对象才会更新子组件
    // 为空数组的话就会执行一次 以后都不会执行 这个变量就一直使用初次的地址
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
            <Child obj={obj} />
        </div>
    );
}

export default App;
