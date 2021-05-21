import React from "react";

// 高阶组件 HOC ：接受一个组件 返回一个组件

function connect(Com) {
    // return  <Com /> 直接将这个组件返回 也是一个高阶组件 只不过没法接收参数了而已
    return function() {
        <Com />;
    };
}

class App extends React.Component{
    render(){
        console.log(this)
        re
    }
}

App = connect(App);

export default App;
