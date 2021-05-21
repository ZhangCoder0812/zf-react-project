import React from "react";

/* 
   1. ref 获取节点(被废弃 目前还可以使用) 可以放在元素和组件上
          (必须是类组件 一个实例 不能是函数式组件)
      用法：ref='xxx'  this.refs.xxx
   
      
            
    
*/

class Child extends React.Component {
    render() {
        return <div>Child</div>;
    }
}

class App extends React.Component {
    fn = () => {
        console.log(this.refs.xxx);
        // 和原生获取的节点相同
        console.log(this.refs.xxx === document.querySelector("h1"));
        // 获取组件
        console.log(this.refs.child);
        // 通过函数方式获取 不老不旧的方式
        console.log(this.ttt);
    };
    render() {
        return (
            <div>
                <h1 ref="xxx">我是h1标签</h1>
                <Child ref="child" />
                <h2 ref={el => (this.ttt = el)}>我是h2标签</h2>
                <button onClick={this.fn}>获取h1</button>
            </div>
        );
    }
}

export default App;
