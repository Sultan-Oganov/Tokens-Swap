import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {format} from 'date-fns';
import {cryptoTokensList} from '../../../utils/cryptoTokensList';

export const tokenApi = createApi({
  reducerPath: 'tokensApi',
  baseQuery: fetchBaseQuery({baseUrl: cryptoTokensList.baseUrl}),
  endpoints: build => ({
    getTokens: build.query({
      query: () => ({
        url: cryptoTokensList.extended.url,
      }),
      transformResponse: (response: Record<string, any>) => {
        return {
          updatedDate: format(new Date(response.timestamp), 'LLL d, YYY, h:mm'),
          data: response.tokens,
        };
      },
    }),
  }),
});

export const {useGetTokensQuery} = tokenApi;
