import React, { useState, useEffect } from "react";
import store from "./store";

class App extends React.Component {
    handleAdd = () => {};

    render() {
        return (
            <div>
                <h1>{store.getState().count}</h1>
                <button onClick={this.handleAdd}>+</button>
                <Child></Child>
            </div>
        );
    }
}

export default App;
