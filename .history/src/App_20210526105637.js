import React from "react";

/* 
   react-redux 优化redux的写法 redux使用起来写的过于繁琐
   react-redux：安装  npm i  react-redux -S
   用法：写成高阶组件的形式
    
*/

class App extends React.Component {
    handleAdd = () => {};

    render() {
        return (
            <div>
                <h1>{}</h1>
                <button onClick={this.handleAdd}>+</button>
            </div>
        );
    }
}

export default App;
