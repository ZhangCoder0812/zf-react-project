import React from "react";

class App extends React.Component {
    state = {
        count: 0,
        name: "",
    };
    /* 
        vue react 都是单向数据流
        vue是双向数据绑定 数据修改 视图自动更新
        react是单向数据绑定 视图不会自动更新

        setState大部分是异步操作 防止多次setState 
        第二个参数是回调函数可以拿到最新的值
     */
    changCount(num) {
        this.setState(
            {
                count: this.state.count + num,
            },
            () => {
                let { count, name } = this.state;
                console.log("异步---", count, "---", name);
            }
        );
        console.log(this.state.count);
        this.setState({
            name: "wade",
        });
    }
    add(num) {
        this.setState(
            {
                count: this.state.count + num,
            },
            () => {
                console.log("@1---", this.state.count);
            }
        );
        this.setState(
            {
                count: this.state.count + num,
            },
            () => {
                console.log("@2---", this.state.count);
            }
        );
        this.setState(
            {
                count: this.state.count + num,
            },
            () => {
                console.log("@3---", this.state.count);
            }
        );
    }
    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>当前数字：{count}</h1>
                <button onClick={() => this.changCount(10)}>+10</button>
                <button onClick={() => this.changCount(-10)}>-10</button>
                <button onClick={() => this.add(10)}>测试</button>
            </div>
        );
    }
}

export default App;
