import React from "react";

class App extends React.Component {
    fn = () => {
       // ref 获取节点 可以放在元素和组件上(必须是类组件)
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
