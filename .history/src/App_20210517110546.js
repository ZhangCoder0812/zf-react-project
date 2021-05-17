import React from "react";
import Child from "./child";

class App extends React.Component {
    state = {
        name: "奔驰GLC",
    };
    changeName() {
        this.setState({
            name: "宝马3系",
        });
    }
    render() {
        let { name } = this.state;
        return (
            <div>
                <h1>我是爹组件【张宇】，这是我的数据----{name}</h1>
                <Child data={name} onChange={this.changeName.bind(this)} />
                {/* 这里传给子组件的数据，事件 名字随意取 一般事件以on开头 */}
            </div>
        );
    }
}

export default App;
