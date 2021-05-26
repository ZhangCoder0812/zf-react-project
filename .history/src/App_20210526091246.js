import React from "react";

function connect(f1, f2) {
  let propsObj = f1({ name: "wade" });
  let fnObj = f2({ dispatch: () => {} });
  return function (Com) {
    return function () {
      return <Com {...propsObj} {...fnObj} />;
    };
  };
}

class App extends React.Component {
  render() {
    console.log(this.props);
    return <div>App</div>;
  }
}

export default App;
