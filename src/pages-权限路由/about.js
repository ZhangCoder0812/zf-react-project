import React from "react";

class About extends React.Component {
  componentDidMount() {
    console.log("about 加载了 ----");
  }
  componentWillUnmount() {
    console.log("about 销毁了 ----");
  }
  render() {
    return <div>About</div>;
  }
}

export default About;
