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

const adminUsers = [
  {
    id: 0,
    username: 'jolylai',
    password: '123456',
  },
];

module.exports = {
  [`POST ${apiPrefix}/user/login`](req, res) {
    const { password, username } = req.body;
    const user = adminUsers.filter(item => item.username === username);
    if (user.length > 0 && user[0].password === password) {
      res.status(200).end();
      // res.json({ message: 'OK', success: true });
    } else {
      res.status(400);
      res.json({ message: 'user not fond' });
    }
  },
};
