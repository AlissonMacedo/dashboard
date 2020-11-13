import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import RecoveryPassword from '../pages/RPassword';

import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Products from '../pages/Products';
import Meetup from '../pages/Meetup/New';

export default function Routes() {
  return (
    <Switch>
      {/* route supplier */}
      <Route path="/" exact component={SignIn} />
      <Route path="/recoverypassword" component={RecoveryPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/products" component={Products} isPrivate />
    </Switch>
  );
}
