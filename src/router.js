import React from 'react';
import { Router, Route } from 'dva/router';

import Login from './routes/Login/index.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
