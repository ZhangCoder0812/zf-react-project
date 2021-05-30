import React from "react";
import store from "./store -myRedux";
import { add, name } from "./store -myRedux/action";

class App extends React.Component {
  handleAdd = () => {
    store.dispatch(add(10));
  };

  handleName = () => {
    store.dispatch(name("lbj"));
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
        <button onClick={this.handleAdd}>+ 异步修改</button>
        <h1>{store.getState().NameReducer.name}</h1>
        <button onClick={this.handleName}>name 同步修改</button>
      </div>
    );
  }
}

export default App;
