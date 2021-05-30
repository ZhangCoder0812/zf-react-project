import React from "react";

class Home extends React.Component {
  componentDidMount() {
    console.log("home 加载了 ----");
  }
  componentWillUnmount() {
    console.log("home 销毁了 ----");
  }
  render() {
    console.log(this.props);
    return <div>Home</div>;
  }
}

export default Home;
