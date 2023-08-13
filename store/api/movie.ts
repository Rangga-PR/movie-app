import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Movie } from "../../types";

interface getMoviesRes {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    },
    baseUrl:
      "https://api.themoviedb.org/4/account/64d8cdb937109700ac4198c2/movie",
  }),
  endpoints: ({ query }) => ({
    getMovies: query<getMoviesRes, number>({
      query: (page: number) => {
        return {
          url: `/recommendations`,
          params: { page, language: "en-US" },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
