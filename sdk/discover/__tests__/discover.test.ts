import DiscoverProvider, { BASE_ENDPOINT } from '../discover.provider';
import { IDiscoverMovieSuccess } from '../discover.interface';

it(`Should return a {
  "page": number,
  "total_results": number,
  "total_pages": number,
  "results": []: IDiscoverDomain }`, async () => {
  const { ok, data } = await DiscoverProvider.discoverMovies();

  if (ok) {
    const { page, results } = data as IDiscoverMovieSuccess;

    expect(page).toEqual(1);
    expect(results.length).toBeGreaterThan(1);
  } else {
    fail(`Cannot request ==> ${process.env.MOVIE_DB_API_URL}/${BASE_ENDPOINT}`);
  }
});
