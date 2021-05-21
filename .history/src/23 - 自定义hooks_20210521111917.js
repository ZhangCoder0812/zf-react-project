import React from "react";

// 高阶组件 HOC ：接受一个组件 返回一个组件

function connect(Com){
    return function(){
        <Com> </Com>
    }
}

function App() {
    return (
        <div>
            <h1>App </h1>
        </div>
    );
}

export default App;
