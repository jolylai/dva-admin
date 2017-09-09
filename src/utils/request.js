import axios from 'axios';

export default function request(option) {
  const { url, ...rest } = option;
  console.log('rest', rest);
  return axios.get(url, rest);
}

