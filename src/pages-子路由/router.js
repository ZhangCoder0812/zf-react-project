import React from "react";
import { Route } from "react-router-dom";

class MyRoute extends React.Component {
  render() {
    let { path, component: Comp } = this.props;
    return (
      <div>
        <Route
          path={path}
          render={(props) => {
            return <Comp {...props}>{this.props.children}</Comp>;
          }}
        ></Route>
      </div>
    );
  }
}

export default MyRoute;
