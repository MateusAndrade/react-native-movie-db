import GenreProvider, { BASE_ENDPOINT } from '../genre.provider';
import { IGenreSuccess } from '../genre.interface';

it(`Should return a { "genres": []: IGenreSuccess }`, async () => {
  const { ok, data } = await GenreProvider.getMovieGenres();

  if (ok) {
    const { genres } = data as IGenreSuccess;
    expect(genres.length).toBeGreaterThan(1);
  } else {
    fail(`Cannot request ==> ${process.env.MOVIE_DB_API_URL}/${BASE_ENDPOINT}`);
  }
});
