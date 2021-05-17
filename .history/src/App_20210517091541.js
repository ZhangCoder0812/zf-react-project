import React from "react";

class App extends React.Component {
    state = {
        count: "xxx",
    };

    changCount(num) {
        this.state.count += num;
    }

    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>当前数字：{count}</h1>
                <button onClick={()=>this.changCount(+10)}>+10</button>
                <button onClick={this.changCount()}>-10</button>
            </div>
        );
    }
}

export default App;
