import React from "react";
import Child from "./child";

class App extends React.Component {
    render() {
        return (
            <div>
                <Child />
                <h1>我是爹组件</h1>
            </div>
        );
    }
}

export default App;
