import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    state = {
        aa: 123,
    };
    shouldComponentUpdate(nextProps, nextState) {
       console.log('---')
        return true;
    }
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
        // this.state.obj.xxx = Math.random()
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
                {/* <Child name={name}></Child> */}
                <Child obj={obj}></Child>
            </div>
        );
    }
}

export default App;
