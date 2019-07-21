import TrendingProvider, { BASE_ENDPOINT } from '../trending.provider';
import { ITrendingSuccess } from '../trending.interface';

it(`Should return at least on TV trending {
  "page": number,
  "total_results": number,
  "total_pages": number,
  "results": []: ITrendingDomain }`, async () => {
  const { ok, data } = await TrendingProvider.getTrendingContent("tv", "day");

  if (ok) {
    const { results } = data as ITrendingSuccess;
    expect(results.length).toBeGreaterThan(1);
  } else {
    fail(`Cannot request ==> ${process.env.MOVIE_DB_API_URL}/${BASE_ENDPOINT}`);
  }
});

it(`Should return at least on Movie trending {
  "page": number,
  "total_results": number,
  "total_pages": number,
  "results": []: ITrendingDomain }`, async () => {
  const { ok, data } = await TrendingProvider.getTrendingContent("movie", "day");

  if (ok) {
    const { results } = data as ITrendingSuccess;
    expect(results.length).toBeGreaterThan(1);
  } else {
    fail(`Cannot request ==> ${process.env.MOVIE_DB_API_URL}/${BASE_ENDPOINT}`);
  }
});

it(`Should return at least on Person trending {
  "page": number,
  "total_results": number,
  "total_pages": number,
  "results": []: ITrendingDomain }`, async () => {
  const { ok, data } = await TrendingProvider.getTrendingContent("person", "day");

  if (ok) {
    const { results } = data as ITrendingSuccess;
    expect(results.length).toBeGreaterThan(1);
  } else {
    fail(`Cannot request ==> ${process.env.MOVIE_DB_API_URL}/${BASE_ENDPOINT}`);
  }
});
