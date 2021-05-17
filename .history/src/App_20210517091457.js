import React from "react";

class App extends React.Component {
    state = {
        count: "xxx",
    };

    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>当前数字：{count}</h1>
                <button onClick={this.changCount()}>+10</button>
                <button>-10</button>
            </div>
        );
    }
}

export default App;
