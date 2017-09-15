import React from 'react';
import { Router } from 'dva/router';
import App from './routes/app';

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model);
  }
};

const Routers = function ({ history, app }) {
  // console.log('history', history);
  // console.log('app', app);
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/dashboard'));
          cb(null, require('./routes/dashboard/'));
        }, 'dashboard');
      },
      childRoutes: [
        {
          path: '/dashboard',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/dashboard'));
              cb(null, require('./routes/dashboard/'));
            }, 'dashboard');
          },
        }, {
          path: '/login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/login'));
              cb(null, require('./routes/login/'));
            }, 'login');
          },
        }, {
          path: '/weather',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/weather'));
              cb(null, require('./routes/weather/'));
            }, 'wheather');
          },
        }, {
          path: '/music',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/music/'));
            }, 'music');
          },
        }, {
          path: '/demo/drag',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/demo/drag'));
            }, 'demo-drag');
          },
        }, {
          path: '/setting',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/weather'));
              cb(null, require('./routes/setting/'));
            }, 'setting');
          },
        }, {
          path: '*',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/err/'));
            }, 'err');
          },
        },
      ],
    },
  ];
  return <Router history={history} routes={routes} />;
};

export default Routers;
