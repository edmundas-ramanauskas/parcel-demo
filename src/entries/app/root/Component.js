import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '@lib/asyncComponent';
// import Dashboard from '@modules/dashboard';

const Account = asyncComponent(() => import('@modules/account'));
const Dashboard = asyncComponent(() => import('@modules/dashboard'));

const Root = () => (
  <Router>
    <Switch>
      <Route path="/account" component={Account} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect to="/dashboard" />
    </Switch>
  </Router>
);

export default Root;
