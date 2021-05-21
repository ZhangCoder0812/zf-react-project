import React from "react";

// 高阶组件 HOC ：接受一个组件 返回一个组件

function connect(Com) {
    // return  <Com />  不能直接将这个组价返回 
    let state = {
        name: "wade",
    };
    return function() {
        return <Com {...state} />;
    };
}

class App extends React.Component {
    render() {
        console.log(this);
        return <div>App</div>;
    }
}
App = connect(App);

export default App;
