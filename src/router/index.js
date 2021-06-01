import React from "react";
import { Route, Switch } from "react-router-dom";
import { loadable } from "../utils/tool";
import Protect from "./protect";

const Login = loadable({
  loader: () => import("../views/login"),
});

const Layout = loadable({
  loader: () => import("../views/layout"),
});

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/404" render={() => <h1>404</h1>}></Route>
      <Protect path="/" level={2} component={Layout}></Protect>
    </Switch>
  );
}

export default App;
