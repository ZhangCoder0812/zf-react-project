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
function Child(){
  return <div>
    Child <h1></h1>
  </div>
}
class App extends React.Component {
    handleAdd = () => {
        store.dispatch({
            type: "add",
            n: 10,
        });
        // 虽然数据变了 但是视图不会更新 这里必须要手动更新视图
        // 可以通过下面subscribe只写一次就行了
        // this.setState({});
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
                <h1>{store.getState().name}</h1>
                <button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}

export default App;
