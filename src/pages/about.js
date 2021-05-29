import React from "react";

class About extends React.Component {
  render() {
    console.log(this.props.location.state); // 刷新发现路由里的 sate不会丢失
    return <div>About</div>;
  }
}

export default About;
