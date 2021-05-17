import React from "react";

class App extends React.Component {
    state = {
        count: 0,
    };
     /* 
        vue react 都是单向数据流
        vue是单向数据绑定 
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
