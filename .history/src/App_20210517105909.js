import React from "react";
import Child from "./child";

class App extends React.Component {
    state = {
        name: "wade",
    };
    render() {
        let { name } = this.state;
        return (
            <div>
                <h1>我是爹组件【张宇】，这是我的数据----{name}</h1>
                <Child data={name} />
            </div>
        );
    }
}

export default App;
