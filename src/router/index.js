import React from 'react';
import * as ROUTES from '../constants/routes';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Note from '../pages/NotePage';
import Landing from '../pages/Landpage';
import Register from '../pages/Register';
import Account from '../pages/Account';
import FixAccount from '../pages/AccountFix';
import NotFound404 from '../pages/NotFound404';

export function AppRouter() {

  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route path={ROUTES.NOTE} component={Note} />
      <Route path={ROUTES.REGISTER} component={Register} />
      <Route path={ROUTES.ACCOUNT} component={Account} />
      <Route path={ROUTES.FIX_ACCOUNT} component={FixAccount} />
      <Route path='/' component={NotFound404} />
    </Switch>
  )
}