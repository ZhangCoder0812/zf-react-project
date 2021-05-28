import React from "react";
import store from "./store -myRedux";

class App extends React.Component {
  handleAdd = () => {
    store.dispatch({
      type: "add",
      n: 10,
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    return (
      <div>
        <h1>{store.getState().CountReducer.count}</h1>
        <button onClick={this.handleAdd}>+</button>
        <h1>{store.getState().NameReducer.name}</h1>
      </div>
    );
  }
}

export default App;
