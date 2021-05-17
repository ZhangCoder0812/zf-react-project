import React from "react";

class App extends React.Component {
    state = {
        name: "xxx",
    };

    render() {
        return <div>
          <h1>当前数字：{}</h1>
          <button>+10</button>
          <button>-10</button>
        </div>;
    }
}

export default App;
