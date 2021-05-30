import React from "react";
import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";
import Home from "./pages-子路由/home";
import About from "./pages-子路由/about";
import MyRoute from "./pages-子路由/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/home">home</NavLink>

        <MyRoute path="/home" component={Home}>
          <Route path="/home/about" component={About}></Route>
        </MyRoute>
      </div>
    );
  }
}

export default withRouter(App);
