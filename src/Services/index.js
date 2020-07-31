import axios from 'axios';

export const getPageData = async (endpoint) => {
  const {data} = await axios({
    method: 'GET',
    url: `https://5f1ef14157e3290016863f9a.mockapi.io/mobile/api/v1/${endpoint}`,
  });

  return data;
};
