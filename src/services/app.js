import config from '../utils/config';
import request from '../utils/request';

const { api } = config;

export async function query(data) {
  return request({
    url: api.user.replace('/:id', ''),
    method: 'get',
    params: data,
  });
}
