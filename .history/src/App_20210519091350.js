import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    state = {
        aa: 123,
    };
    // 父组件发生改变 所有子组件都会更新 
    // nextProps 改变之后的props数据
    shouldComponentUpdate(nextProps, nextState) {
        
        console.log(nextProps, this.props);
        return true;
    }
    render() {
        console.log("Child render");
        return <div>子组件</div>;
    }
}

class App extends React.Component {
    state = {
        name: "wade",
        age: 12,
    };
    changeName = e => {
        this.setState({
            name: e.target.value,
        });
    };
    changeAge = e => {
        this.setState({
            age: e.target.value,
        });
    };
    render() {
        let { name, age } = this.state;
        return (
            <div>
                <h1>
                    {name}-{age}
                </h1>
                <input type="text" value={name} onChange={this.changeName}></input>
                <input type="text" value={age} onChange={this.changeAge}></input>
                <Child name={name}></Child>
            </div>
        );
    }
}

export default App;
