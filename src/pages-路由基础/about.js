import React from "react";
import { Route } from "react-router-dom";

class About extends React.Component {
  render() {
    console.log(this.props.location.state); // 刷新发现路由里的 sate不会丢失
    return (
      <div>
        About
        {/* 这里也可以写 Route 实现嵌套路由 */}
        <Route
          path="/about/xxx"
          render={() => {
            return <h1>我是about子路由</h1>;
          }}
        ></Route>
      </div>
    );
  }
}

export default About;
