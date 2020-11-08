import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Pins from "./containers/Pins";
const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard/pins">
        <Pins></Pins>
      </Route>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
      <Route path="/login">
        <p>Login Works!!</p>
      </Route>
      <Route exact path="/">
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        ></Redirect>
      </Route>
    </Switch>
  );
};

export default Routes;
