import React from "react";
import { connect } from "react-redux";
import * as types from "./store/actionTypes";

class App extends React.Component {
 
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleTest}>test</button>
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
