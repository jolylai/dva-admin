// import qs from 'qs';
import config from '../src/utils/config';

const { apiPrefix } = config;
const Mock = require('mockjs');

const userList = Mock.mock({
  'user|10': [
    {
      id: '@id',
      name: '@name',
      nickName: '@last',
      phone: /^1[34578]\d{9}$/,
      'age|11-99': 1,
      address: '@county(true)',
      isMale: '@boolean',
      email: '@email',
      createTime: '@datetime',
      avatar() {
        return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
      },
    },
  ],
});

const database = userList.user;

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
    } else {
      res.status(400);
      res.json({ message: 'user not fond' });
    }
  },

  [`GET ${apiPrefix}/user`](req, res) {
    const user = database[0];
    res.json(user);
  },

  [`GET ${apiPrefix}/user/:id`](req, res) {
    const user = database[0];
    res.json(user);
  },
};
