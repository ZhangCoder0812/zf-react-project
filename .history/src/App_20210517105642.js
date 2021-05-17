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
                <h1>我是爹组件，这是</h1>
            </div>
        );
    }
}

export default App;
