import React from "react";
import { connect } from "react-redux";

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
        return {
            count: state.count,
            name:state.NameR
        };
    },
    dispatch => {
        return {
            dispatch,
        };
    }
)(App);

export default App;
