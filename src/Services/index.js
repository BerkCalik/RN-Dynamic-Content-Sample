import axios from 'axios';

export const getHomeData = async () => {
  const {data} = await axios({
    method: 'GET',
    url: 'https://5f1ef14157e3290016863f9a.mockapi.io/mobile/api/v1/templates',
  });

  return data;
};
