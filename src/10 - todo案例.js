import React from "react";

class App extends React.Component {
  state = {
    todo: "",
    list: [],
  };
  submit() {
    this.setState({
      list: [{ id: Math.random(), val: this.state.todo }].concat(
        this.state.list
      ),
      todo: "",
    });
  }
  del(id) {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }
  render() {
    let { todo, list } = this.state;
    return (
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            this.setState({
              todo: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            e.keyCode == 13 && this.submit();
          }}
        />
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.val}
              <button onClick={() => this.del(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
