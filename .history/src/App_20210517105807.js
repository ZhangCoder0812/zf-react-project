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
                <Child data={name} />
                <h1>我是爹组件[张宇]，这是我的数据->{name}</h1>
            </div>
        );
    }
}

export default App;
