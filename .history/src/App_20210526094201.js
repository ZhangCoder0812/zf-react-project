import React from "react";
import store from "./store";
/* 
  安装：npm i redux -S
  redux 数据管理模型 跟react没关系
  redux三大原则：单一数据源，State 是只读的，使用纯函数来执行修改
*/
class App extends React.Component {
    handleAdd(){
      store.dispatch({
        type: "add",
        n: 10,
    })
    }

    render() {
        return (
            <div>
                <h1>{store.getState().count}</h1>
                <h1>{store.getState().name}</h1>
                <button
                    onClick={ this.handleAdd}
                >
                    +
                </button>
            </div>
        );
    }
}

export default App;
