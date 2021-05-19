import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        console.log("Child render");
        return <div>子组件</div>;
    }
}

class App extends React.Component {
   state={
     name:'wade',
     age:12
   }
    render() {
      let { name , age } = this.state
        return (
            <div>
                <input type='text' value={name} onChange={this.changeName}></input>
                <Child></Child>
            </div>
        );
    }
}
