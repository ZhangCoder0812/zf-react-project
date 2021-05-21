import React from "react";

// 高阶组件 HOC ：接受一个组件 返回一个组件

function connect(Com) {
    // return  <Com /> 直接将这个组件返回 也是一个高阶组件 只不过没法接收参数了而已
    return function() {
        <Com />;
    };
}

function App() {
    return (
        <div>
            <h1>App </h1>
        </div>
    );
}

export default App;
