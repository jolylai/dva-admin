import { routerRedux } from 'dva/router';
import { login } from '../services/login';

export default {
  namespace: 'login',
  state: {},
  reducers: {},
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(login, payload);
      if (data.success) {
        yield put(routerRedux.push('/dashboard'));
      }
    },
  },
  subscriptions: {},
};
