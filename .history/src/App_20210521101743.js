import React from "react";

/* 
 自定义hooks 抽离公共逻辑
*/

class App extends React.Component {
    state = {
        name: "wade",
    };
    render() {
        return <div>我是父组件</div>;
    }
}

export default App;
