import React from "react";
import ReactDOM from "react-dom";

//PureComponent 纯组件 内置了 shouldComponentUpdate 但是传的是一个对象的话 只会比较一层
class Child extends React.PureComponent {
    state = {
        aa: 123,
    };
    render() {
        console.log("Child render");
        return <div>子组件 - {this.props.name}</div>;
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
        // this.state.obj.xxx = Math.random() 这种的写法不会触发
        this.setState({
            name: e.target.value,
            obj: {
                ...this.obj,
                xxx: Math.random(),
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
                <Child obj={obj}></Child>
            </div>
        );
    }
}

export default App;
