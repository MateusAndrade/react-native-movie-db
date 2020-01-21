export type TMediaTypeTreding = "all" | "movie" | "tv" | "person";  

export type TTimeWindowTrending = "day" | "week";

export interface ITrending {
  original_name: string;
  id: number;
  name: string;
  vote_count: number;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  overview: string;
  origin_country: string[];
  popularity: number;
};

export interface ITrendingSuccess {
  page: number;
  results: ITrending[];
  total_pages: number;
  total_results: number;
}

