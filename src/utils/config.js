
const prifix = '/api';

module.exports = {
  name: 'Jolylai',
  apiPrefix: '/api',
  api: {
    userLogin: `${prifix}/user/login`,
    user: `${prifix}/user/:id`,
  },
};
