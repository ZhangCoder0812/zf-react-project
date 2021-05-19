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

    useEffect(() => {
        console.log("ok");
    }, []); // 第二个参数为空数组 相当于componentDidMount 只会执行一次

    useEffect(() => {
        console.log("ok1");
    }); // 第二个参数不写 相当于componentDidMount + componentDidUpdate 每次都会执行

    useEffect(() => {
        console.log("ok2");
        return () => {
            console.log("组件销毁 ok2 返回的回调函数 ");
        };
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
            {state.count < 30 ? <Child /> : ""}
        </div>
    );
}

export default App;
