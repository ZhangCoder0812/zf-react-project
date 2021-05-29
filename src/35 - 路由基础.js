import React from "react";
import {
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import List from "./pages/list";

/* 
 
  Route 类似与 router-view。匹配到path对应的路劲 加载compoonent对应的组件。
        路径加参数只能自己手动处理。

  Link 类似于 router-link。
  NavLink 用法和Link用法一样 但是会有高亮的类名。
  Redirect 重定向 匹配到path 重定向到to。

  react路由匹配规则会一直向下匹配 只要匹配到了就加载。 
  所以在 /about 刷新会走到 /home ，因为redirect那里写了 /,
  匹配到了 / 就去渲染home了。不刷新的时候不会有这个问题 因为路由配置不会重新渲染。
  可以加react精准匹配，直接在Redirect上加 exact 好像不好使，
  要写成render形式的重新向。

  /* 匹配404 ，由于上面说的原因会把匹配到的组件和404一起显示，要 Switch 组件
  将Route配置包裹起来处理。

  编程式导航：
   凡是通过Route标签渲染的组件，都能在props中拿到路由信息，
   不是Route渲染的要通过 withRouter 变成高阶组件。   

   原生query传参：this.props.history.push("/home?id=1");

   路径传参 Route上配置了参数，那么 NavLink 的path必须也要
   加参数 不然会走到404。
   获取参数 this.props.match.params
 
*/

class App extends React.Component {
  go = () => {
    // console.log(this.props); 通过withRouter处理可以拿到路由信息
    // this.props.history.push("/about");

    // push第二个参数 给路由设置state数据 「谷歌，其他浏览器没试过」刷新不会丢失「之前好像丢失」
    // 但是没找到存在了哪 浏览器缓存都找了都没发现
    this.props.history.push("/about", { xxx: "xxx" });
  };
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to={"/home" + "?id=1&name=wade"}>home传参</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/list">list</NavLink>
        <NavLink to="/list/1233">list</NavLink>
        <button onClick={this.go}>编程式导航-去about</button>
        <Switch>
          {/* <Redirect exact path="/" to="/home"></Redirect> */}
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/home"></Redirect>;
            }}
          ></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/list/:id" component={List}></Route>
          <Route path="/*" render={() => <h1>404</h1>}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
