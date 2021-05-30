import React from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";

let isLogin = true;
let userLevel = 2;
class Protect extends React.Component {
  componentDidMount() {
    console.log("Project组件");
  }
  render() {
    // 这里重命名一下是因为组件名要大写。这里的props是Protect标签上的属性
    let { path, component: Comp, level, ...pastProps } = this.props;
    return (
      <div>
        <Route
          path={path}
          render={(props) => {
            // 这里props的要渲染组件本身的props 里面是路由信息
            // console.log(props) 组件本身的props要传过去 Protect只是一个过渡组件
            if (isLogin) {
              // 登陆之后 且权限允许 才渲染对组件
              if (userLevel >= level) {
                return <Comp {...props} {...pastProps} />;
              } else {
                return <h1>404 没权限</h1>;
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
