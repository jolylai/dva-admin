import config from '../src/utils/config';

const { apiPrefix } = config;
const Mock = require('mockjs');

const data = Mock.mock({
  'user|10': [
    {
      id: '@id',
    },
  ],
});

export default {
  [`GET ${apiPrefix}/user/login`](req, res) {
    console.log('req', req.body);
    res.status(200);
    res.json({ message: 'ok' });
  },
};
