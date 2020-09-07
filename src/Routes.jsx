import { Route, Switch } from "react-router-dom";

import React from "react";
import SveltePage from "./pages/svelte-page";
import User from "./pages/user";

const Routes = () => (
  <Switch>
    <Route path="/user" component={User} />
    <Route path="/" component={SveltePage} />
  </Switch>
);

export default Routes;
