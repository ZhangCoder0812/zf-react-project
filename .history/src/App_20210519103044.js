import React, { useState, useEffect } from "react";

function App() {
    let [state, setState] = useState({
        count: 100,
        name: "wade",
    });

    // useEffect 数据更新且页面渲染完成之后(render之后)执行
    // 比watch之后执行 watch只是数据改变就会执行

    useEffect(() => {
        console.log("ok");
    }, []); // 第二个参数为空数组 相当于componentDidMount 只会执行一次

    useEffect(() => {
        console.log("ok1");
    }); // 第二个参数不写 相当于componentDidMount + componentDidUpdate 每次都会执行

    useEffect(() => {
        console.log("ok2");
    }, [state.count]); // 只有依赖的数据发生改变才会执行

    useEffect(() => {
        console.log("ok3");
    }, [state.name]); // 只有依赖的数据发生改变才会执行

    console.log("-------重新渲染完成-------");

    return (
        <div>
            App
            <h2>{state.count}</h2>
            <button onClick={() => setState({ ...state, count: state.count + 10 })}>+</button>
        </div>
    );
}

export default App;
