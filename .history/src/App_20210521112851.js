import React from "react";

// 高阶组件 HOC ：接受一个组件 返回一个组件

function connect(Com) {
    // return  <Com />  不能直接将这个组件返回 返回的必须是一个函数或者类 这样
    // 相当于返回一个渲染啊后的组件 即虚拟dom
    let state = {
        name: "wade",
    };
    return function() {
        return <Com {...state} />;
    };
    return class Temp extends React.Component{
        render(){
            return
        }
    }
}

class App extends React.Component {
    render() {
        console.log(this);
        return <div>App</div>;
    }
}
App = connect(App);

export default App;
