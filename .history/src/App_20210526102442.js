import React, { useEffect } from "react";
import store from "./store";

function Child() {
    const handleName = () => {
        store.dispatch({
            type: "name",
            name: Math.random(),
        });
        // 这里子组件没有手动触发视图更新但视图也更新了 是因为父组件写了subscribe
    };
    // 若父组件没有写subscribe 需要自己使用useState触发视图更新 但会
    useEffect(() => {
        store.subscribe(() => {
            this.setState({});
        });
    }, []); // 相当于componentDidMount
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
