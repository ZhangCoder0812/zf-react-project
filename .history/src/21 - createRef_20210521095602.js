import React from "react";

/* 
    React.createContext 创建一个上下文 父组件提供一些属性
     那么所有的后代组价都可以获取到 类似于 provide/inject 
*/


class Child extends React.Component {
    render() {
        return <div>Child</div>;
    }
}

const MyContext = React.createContext(); // 创建一个上下文

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
    };
    render() {
        return (
            <div>
                <h1 ref={this.state.xxx}>我是h1标签</h1>
                <Child ref={this.www} />

                <button onClick={this.fn}>获取h1</button>
            </div>
        );
    }
}

export default App;
