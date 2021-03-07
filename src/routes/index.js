import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
