import { Route, NavLink, Redirect, withRouter, Switch } from "react-router-dom";

function Home_children() {
  return (
    <div>
      <Route path="/home/a" render={() => <h1>/home/a</h1>}></Route>
      <Route path="/home/b" render={() => <h1>/home/b</h1>}></Route>
    </div>
  );
}

export default Home_children;
