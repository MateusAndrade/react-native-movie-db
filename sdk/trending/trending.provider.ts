import httpClient from '../http-client';

import { TMediaTypeTreding, TTimeWindowTrending } from './trending.interface';

export const BASE_ENDPOINT: string = '/trending';

export class Trending {
  public getTrendingContent(mediaType: TMediaTypeTreding, timeWindow: TTimeWindowTrending ) {
    return httpClient.get(`${BASE_ENDPOINT}/${mediaType}/${timeWindow}`);
  }
}

export default new Trending();
