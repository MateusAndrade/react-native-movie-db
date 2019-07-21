export interface IGenreDomain {
  id: number;
  name: string;
}

export interface IGenreSuccess {
  genres: IGenreDomain[];
}
