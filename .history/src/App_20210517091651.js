import React from "react";

class App extends React.Component {
    state = {
        count: 0,
    };
     /* 
        v
     */
    changCount(num) {
        this.state.count += num;
        this.setState({
          count:
        })
    }

    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>当前数字：{count}</h1>
                <button onClick={() => this.changCount(10)}>+10</button>
                <button onClick={() => this.changCount(-10)}>-10</button>
            </div>
        );
    }
}

export default App;