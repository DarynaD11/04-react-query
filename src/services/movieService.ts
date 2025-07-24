import axios from "axios";
import type { MoviesHttpResponse } from "../types/movie";

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesHttpResponse> => {
  const response = await axios.get<MoviesHttpResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query: query, page },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
};
