import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";
import { loadable } from "../utils/tool";

const Home = loadable({
  loader: () => import("../views/home"),
});

const About = loadable({
  loader: () => import("../views/about"),
});

function MyRoutes() {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Redirect to="/home"></Redirect>}
        ></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/*" render={() => <Redirect to="/404"></Redirect>}></Route>
      </Switch>
    </div>
  );
}

export default MyRoutes;
