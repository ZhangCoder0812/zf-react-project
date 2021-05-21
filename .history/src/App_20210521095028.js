import React from "react";

/* 
   createRef 获取节点(被废弃 目前还可以使用) 可以放在元素和组件上
          (必须是类组件 一个实例 不能是函数式组件)
      用法：xxx: React.createRef() ref={this.xxx} this.www.current
*/

class Child extends React.Component {
    render() {
        return <div>Child</div>;
    }
}

class App extends React.Component {
    state = {
        xxx: React.createRef(),
    };
    www = React.createRef(); // 建议写在state外面
    fn = () => {
        // 通过current获取
        console.log(this.state.xxx.current);
        // 和原生获取的节点相同
        console.log(this.state.xxx.current === document.querySelector("h1"));
        // 获取组件
        console.log(this.www.current);
        // 通过函数方式获取
        console.log(this.ttt);
    };
    render() {
        return (
            <div>
                <h1 ref={this.state.xxx}>我是h1标签</h1>
                <Child ref={this.www} />
                <h2 ref={el => (this.ttt = el)}>我是h2标签</h2>
                <button onClick={this.fn}>获取h1</button>
            </div>
        );
    }
}

export default App;
