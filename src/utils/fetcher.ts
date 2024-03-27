import { request } from 'graphql-request';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const gqlFetcher = (query) =>
  request({
    url: 'https://oneonta.stepzen.net/api/alert-marsupial/__graphql',
    document: query,
    requestHeaders: {
      Authorization:
        'Apikey oneonta::stepzen.net+1000::1c894b653ee8a3d59cf2e0a87d22803af367cb5f23ebb009ed5b840b258586c4',
    },
  });
