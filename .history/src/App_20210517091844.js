import React from "react";

class App extends React.Component {
    state = {
        count: 0,
    };
     /* 
        vue react 都是单向数据流
        vue是双向数据绑定 数据修改 视图自动更新
        react是单向数据绑定 视图不会自动更新
     */
    changCount(num) {
        this.state.count += num;
        this.setState({
          count:    this.state.count +num
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
