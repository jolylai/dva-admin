import axios from 'axios';

const fetch = (option) => {
  const { url, params, method } = option;
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, params);
    case 'post':
      return axios.post(url, params);
    default:
      break;
  }
};

export default function request(option) {
  return fetch(option).then((response) => {
    const { data, status, statusText } = response;
    return {
      data,
      message: statusText,
      success: true,
      status,
    };
  }).catch((err) => {
    console.log(err);
  });
}

