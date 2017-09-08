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
  [`POST ${apiPrefix}/user/login`](req, res) {
    console.log('req', req.body);
    res.json(data);
  },
};
