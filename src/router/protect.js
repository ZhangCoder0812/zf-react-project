import React from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";

let isLogin = true;
let userLevel = 2;
class Protect extends React.Component {
  componentDidMount() {
    console.log("Project组件");
  }
  render() {
    let { path, component: Comp, level, ...pastProps } = this.props;
    return (
      <div>
        <Route
          path={path}
          render={(props) => {
            if (isLogin) {
              if (userLevel >= level) {
                return <Comp {...props} {...pastProps} />;
              } else {
                return <Redirect to="/404"></Redirect>;
              }
            } else {
              alert("未登陆，不能进入");
              return <Redirect to="/login"></Redirect>;
            }
          }}
        ></Route>
      </div>
    );
  }
}

export default Protect;
