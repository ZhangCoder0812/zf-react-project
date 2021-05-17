import React from "react";
import List from "./components/child";

class App extends React.Component {
    state = {
        name: "奔驰GLC",
    };
    changeName(name) {
        this.setState({
            name,
        });
    }
    render() {
        let { name } = this.state;
        return (
            <div>
                <h1>我是爹组件【张宇】，这是我的数据----{name}</h1>
                <Child data={name} onChange={this.changeName.bind(this)} />
                {/* 
                   这里传给子组件的数据，事件 名字随意取 一般事件以on开头 
                   bind处理过的函数在用call/apply/bind处理就没用了
                */}
            </div>
        );
    }
}

export default App;
