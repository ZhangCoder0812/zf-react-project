import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    state = {
        aa: 123,
    };
    // 父组件发生改变 所有子组件都会更新
    // shouldComponentUpdate 优化性的钩子函数 return false不更新 return true更新
    // nextProps 改变之后的props数据  nextState 改变之后的state数据
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.name == this.props.name) {
    //         return false;
    //     }
    //     return true;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        
        return true;
    }
    render() {
        console.log("Child render");
        return <div>子组件 - {this.props.name} - {this.props.obj}</div>;
    }
}

class App extends React.Component {
    state = {
        name: "wade",
        age: 12,
        obj: {
            xxx: 123,
            yyy: 789,
        },
    };
    changeName = e => {
        this.setState({
            name: e.target.value,
            obj: {
                ...this.obj,
                xxx: 456,
            },
        });
    };
    changeAge = e => {
        this.setState({
            age: e.target.value,
        });
    };
    render() {
        let { name, age, obj } = this.state;
        return (
            <div>
                <h1>
                    {name}-{age}
                </h1>
                <input type="text" value={name} onChange={this.changeName}></input>
                <input type="text" value={age} onChange={this.changeAge}></input>
                {/* <Child name={name}></Child> */}
                <Child obj={obj}></Child>
            </div>
        );
    }
}

export default App;
