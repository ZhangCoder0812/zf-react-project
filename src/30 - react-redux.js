import React from "react";
import { connect } from "react-redux";

/* 
   react-redux 优化redux的写法 redux使用起来写的过于繁琐
   react-redux：安装  npm i  react-redux -S
   用法：写成高阶组件的形式 根组件用Provider包起来
         connect会将state和dispatch放到组件的props中 
         视图自动更新     
*/

function Child(props) {
    return (
        <div>
            <h1>-----child------</h1>
            {props.name}
        </div>
    );
}

Child = connect(state => {
    return {
        name: state.name,
    };
})(Child);

class App extends React.Component {
    handleAdd = () => {
        this.props.dispatch({
            type: "add",
            n: 10,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.handleAdd}>+</button>
                <Child></Child>
            </div>
        );
    }
}

App = connect(
    state => {
        // 这个state就是reducer中的state
        return {
            count: state.count,
        };
    },
    dispatch => {
        return {
            dispatch,
        };
    }
)(App);

export default App;
