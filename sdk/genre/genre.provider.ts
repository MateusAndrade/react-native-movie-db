import httpClient from '../http-client';

export const BASE_ENDPOINT: string = '/genre/movie/list';

export class Genre {
  public getMovieGenres(languague?: string) {
    return httpClient.get(BASE_ENDPOINT, languague && { languague });
  }
}

export default new Genre();
