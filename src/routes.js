import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
const Routes = () => {
    return <Switch>
    <Route path="/dashboard">
      <Dashboard></Dashboard>
    </Route>
    <Route path="/login">
    <p>Login Works!!</p>   
    </Route>
    <Route path="/">
      <Dashboard></Dashboard>
    </Route>
  </Switch>
}

export default Routes;