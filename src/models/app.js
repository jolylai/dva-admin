import { query } from '../services/app';

export default {
  namespace: 'app',
  state: {
    user: {},
  },
  reducers: {
    querySuccess(state, { payload }) {
      const { user } = payload;
      return {
        ...state,
        user,
      };
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(query, payload);
      if (data.success) {
        console.log('userinfo', data);
        yield put({
          type: 'querySuccess',
          payload: {
            user: data.data,
          },
        });
      } else {
        throw data;
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log('pathname', pathname);
        if (pathname === '/') {
          window.location = `${location.origin}/login`;
        }
        if (pathname === '/login') {
          dispatch({ type: 'query' });
        }
      });
    },
  },
};
