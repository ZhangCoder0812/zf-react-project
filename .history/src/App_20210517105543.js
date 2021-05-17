import React from "react";
import Child from "./child";

class App extends React.Component {
    render() {
        let { } = this.state
        return (
            <div>
                <Child data={}/>
                <h1>我是爹组件</h1>
            </div>
        );
    }
}

export default App;
