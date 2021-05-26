import React, { useState, useEffect } from "react";
import store from "./store";

function Child() {
    const handleName = () => {
        // 这里子组件没有手动触发视图更新但视图也更新了 是因为父组件写了subscribe
        store.dispatch({
            type: "name",
            name: Math.random(),
        });
    };
    // 若父组件没有写subscribe 需要自己使用useState触发视图更新 但会多造出来了没用的变量
    let [xx, setXX] = useState(0);
    useEffect(() => {
        //  subscribe 的返回值是一个函数 会把这次增加的事件移除 防止溢出
        let clear = store.subscribe(() => {
            setXX(xx + 1);
        });
        return () => {
            clear();
        };
    }); //这里不能加第二个参数 加了相当于componentDidMount 只会执行一次
    // 或者直接从useEffect中拿出来 反正每次都执行 但是这样写没法移除了
    // store.subscribe(() => {
    //     setXX(xx + 1);
    // });
    return (
        <div>
            <h1>--------Child-------</h1>
            <h1>{store.getState().name}</h1>
            <button onClick={handleName}>name</button>
        </div>
    );
}
class App extends React.Component {
    handleAdd = () => {
        store.dispatch({
            type: "add",
            n: 10,
        });
    };

    componentDidMount() {
        store.subscribe(() => {
            this.setState({});
        });
    }

    render() {
        return (
            <div>
                <h1>{store.getState().count}</h1>
                <button onClick={this.handleAdd}>+</button>
                <Child></Child>
            </div>
        );
    }
}

export default App;
