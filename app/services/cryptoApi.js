import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
// Data fetching logic

const cryptoApiHeaders = {
  headers: {
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
  },
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});
