import React from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";
// 组件/路由懒加载 使用import函数导入 这个import函数返回的是一个Promise
// 要配合Suspense组件使用 fallback表示组件还未加载完展示的组件
const Home = React.lazy(() =>
  import(/* webpackChunkName:'home' */ "./pages/home")
);
const About = React.lazy(() =>
  import(/* webpackChunkName:'about' */ "./pages/about")
);

// import里面不能用变量 会找不到路径
// let url = "./pages/about";
// const About = React.lazy(() => import(/* webpackChunkName:'about' */ url));

class App extends React.Component {
  state = {
    flag: true,
  };
  fn = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.fn}>切换组件</button>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>

        {/* 懒加载 结合组件使用 */}
        <React.Suspense fallback={<h1>加载中...</h1>}>
          {this.state.flag ? <Home /> : <About />}
        </React.Suspense>

        {/* 懒加载 结合路由使用 */}
        <React.Suspense fallback={<h1>加载中...</h1>}>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </React.Suspense>
      </div>
    );
  }
}

export default withRouter(App);
