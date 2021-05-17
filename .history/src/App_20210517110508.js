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
                <Child data={name} change={this.changeName.bind(this)}/>
            </div>
        );
    }
}

export default App;
