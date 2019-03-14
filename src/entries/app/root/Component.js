import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import asyncComponent from '@lib/asyncComponent';

const Dashboard = asyncComponent(() => import('@modules/dashboard'));
const NotFound = asyncComponent(() => import('@modules/not-found'));

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
