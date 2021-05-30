import React from "react";

// 高阶组件 HOC ：接受一个组件 经过一些处理再 返回一个组件 通常返回的还是这个组件
//              可以控制一些参数的传递。 

function connect(Com) {
    // return  <Com />  不能直接将这个组件返回 返回的必须是一个函数或者类 这样
    // 相当于返回一个渲染啊后的组件 即虚拟dom
    let state = {
        name: "wade",
    };
    // 返回函数式组件
    // return function() {
    //     return <Com {...state} />;
    // };
    // 返回类组件
    return class Temp extends React.Component {
        render() {
            return <Com {...state} />;
        }
    };
}

class App extends React.Component {
    render() {
        console.log(this.props); // {name:'wade'}
        return <div>App</div>;
    }
}
App = connect(App);

export default App;
