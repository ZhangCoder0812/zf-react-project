import React from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";
import Home from "./pages-权限路由/home";
import About from "./pages-权限路由/about";
import Login from "./pages-权限路由/login";
import Protect from "./pages-权限路由/protect";

// 受保护路由 经过protect组件做了一层校验
// 需要权限的路由使用Protect 不需要权限的路由还正常使用Route
// 这个Project就是普通的组件 写几个渲染几次 只不多通过逻辑判断哪个显示

// 这里路由配置可以做成一个对象 遍历生成 类似于vue中的路由
// 后台返回路由不会给组件 所以自己做个路径-组件的映射对象 自及去拼对应的组件
let obj = {
  "/home": Home,
  "/about": About,
};
let routes = [
  {
    path: "/home",
    meta: { level: 1 },
  },
  {
    path: "/about",
    meta: { level: 3 },
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/login">login</NavLink>

        <Route path="/login" component={Login}></Route>
        {/* 
          <Protect
            path="/home"
            component={Home}
            level="1"
            className="xxx"
          ></Protect>
          <Protect path="/about" component={About} level="3"></Protect>
         */}
        {routes.map((item) => {
          return (
            <Protect
              key={item.path}
              path={item.path}
              component={obj[item.path]}
              level={item.meta.level}
            ></Protect>
          );
        })}
      </div>
    );
  }
}

export default withRouter(App);
