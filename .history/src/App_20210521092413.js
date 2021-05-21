import React from "react";

/* 
   1. ref 获取节点(被废弃 目前还可以使用) 可以放在元素和组件上
          (必须是类组件 一个实例 不能是函数式组件)
      用法：ref='xxx'  this.refs.xxx
          
    
*/

class App extends React.Component {
    fn = () => {
        console.log(this.refs.xxx);
        // 和原生获取的节点相同
        console.log(this.refs.xxx === document.querySelector("h1"));
    };
    render() {
        return (
            <div>
                <h1 ref="xxx">我是h1标签</h1>
                <button onClick={this.fn}>获取h1</button>
            </div>
        );
    }
}

export default App;
