import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import LayoutContainer from '../modules/_common/MainLayout';

import stock from '../modules/stock';

const routes = (
  <Route path='/'>
    <Route component={LayoutContainer}>
      <IndexRedirect to='stock' />
      <Route path='stock'>
        <IndexRoute component={stock.scenes.list} />
        <Route path='list' component={stock.scenes.list} />
        {/*<Route path='create' component={prices.scenes.create} />*/}
      </Route>

    </Route>
  </Route>
);

export default routes;
