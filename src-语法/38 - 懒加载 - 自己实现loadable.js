import React, { useState } from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";

function loadable(obj) {
  // 这里loading组件可以给个默认值 不用每次都传
  let { loader, loading: Loading } = obj;
  let Comp;
  return function (props) {
    let [flag, setFlag] = useState(false);
    loader().then((data) => {
      // import函数返回值是一个Promise then表示加载完成
      Comp = data.default;
      console.log(Comp);
      setFlag(true);
    });
    return <>{flag ? <Comp {...props} /> : <Loading />}</>;
  };
}

const Home = loadable({
  loader: () => import("./pages/home"),
  loading: () => <h1>加载中...</h1>,
});

const About = loadable({
  loader: () => import("./pages/about"),
  loading: () => <h1>加载中...</h1>,
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>

        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    );
  }
}

export default withRouter(App);
