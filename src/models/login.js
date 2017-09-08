import { login } from '../services/login';

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    *query({ payload }, { call }) {
      console.log('payload', payload);
      const data = yield call(login, payload);
      console.log('data', data);
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   history.listen((location) => {
    //     if (location.path === 'login') {
    //       dispatch({
    //         type: 'query',
    //       });
    //     }
    //   });
    // },
  },
};
