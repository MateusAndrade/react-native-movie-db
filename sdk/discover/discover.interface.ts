import { ApiResponse } from 'apisauce';

export interface IDiscoverQuery {
  primary_release_year?: number;
  sort_by?: 'popularity.asc' | 'popularity.desc';
}

export interface IDiscoverDomain {
  vote_count?: number;
  id?: number;
  video?: boolean;
  vote_average?: number;
  title?: string;
  popularity?: number;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
}

export interface IDiscoverMovieSuccess {
  page: number;
  total_results: number;
  total_pages: number;
  results: IDiscoverDomain[];
}

export type TGetDiscover = (
  queryParams: IDiscoverQuery
) => Promise<ApiResponse<IDiscoverMovieSuccess>>;
