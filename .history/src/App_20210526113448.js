import React from "react";
import { connect } from "react-redux";
import * as types from "./actionTypes";

class App extends React.Component {
    handleAdd = () => {
        // dispatch直接使用 不用加对应reducer的名字了
        this.props.dispatch({
            type: "add",
            n: 10,
        });
    };
    handleAdd = () => {
        // dispatch直接使用 不用加对应reducer的名字了
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
                <button onClick={this.handleTest}>+</button>
            </div>
        );
    }
}

App = connect(
    state => {
        return {
            count: state.CountReducer.count,
            name: state.NameReducer.name,
        };
    },
    dispatch => {
        return {
            dispatch,
        };
    }
)(App);

export default App;
