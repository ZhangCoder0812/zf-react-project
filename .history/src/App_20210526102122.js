import React from "react";
import store from "./store";
/* 
  安装：npm i redux -S
  redux 数据管理模型 跟react没关系
  redux三大原则：单一数据源，State 是只读的，使用纯函数来执行修改
  store：{
    getState：获取数据
    dispatch：通过提交action的方式修改数据
    subscribe(callback)：callback会在数据更新之后自动执行
  }
*/
function Child() {
    const handleName = () => {
        store.dispatch({
            type: "name",
            name: Math.random(),
        });
        // 这里子组件没有手动触发视图更新但视图也更新了 是因为父组件写了subscribe
    };
    return (
        <div>
            Child <h1>{store.getState().name}</h1>
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
