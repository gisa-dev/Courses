import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4db821d1716320e522f393ecd9c357ae',
    language: 'en-US',
  },
});
