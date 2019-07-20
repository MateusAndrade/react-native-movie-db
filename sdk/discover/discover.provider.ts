import qs from 'query-string';

import httpClient from '../http-client';

import { IDiscoverDomain } from './discover.interface';

const BASE_ENDPOINT: string = '/discover/movie';

export class Discover {
  public discoverMovies(queryParams: IDiscoverDomain): Promise<any> {
    return httpClient.get(BASE_ENDPOINT, queryParams);
  }
}

export default new Discover();
