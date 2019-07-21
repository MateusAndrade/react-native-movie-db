import qs from 'query-string';

import httpClient from '../http-client';

import { IDiscoverQuery } from './discover.interface';

const BASE_ENDPOINT: string = '/discover/movie';

export class Discover {
  public discoverMovies(queryParams?: IDiscoverQuery) {
    return httpClient.get(BASE_ENDPOINT, queryParams || {});
  }
}

export default new Discover();
