import axios from 'axios';

export default function request(option) {
  const { url, params } = option;
  return axios.post(url, params).then((response) => {
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

