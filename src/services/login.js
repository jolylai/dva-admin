import config from '../utils/config';
import request from '../utils/request';

const { userLogin } = config.api;

export async function login(data) {
  return request({
    url: userLogin,
    method: 'get',
    params: data,
  });
}
