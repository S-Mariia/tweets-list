import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ff39c9c5c800a7238e828b.mockapi.io/users',
});

export const fetchUsers = async page => {
  const { data } = await instance.get('/', {
    params: {
      page,
      limit: 4,
    },
  });
  return data;
};
