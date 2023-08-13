import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../types";

interface WatchListState {
  movies: Movie[];
}

const initialState: WatchListState = {
  movies: [],
};

export const watchlistSclice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      if (state.movies.find((movie) => movie.id === action.payload.id)) return;
      state.movies = [...state.movies, action.payload];
    },
    removeMovie: (state, action: PayloadAction<Movie>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, removeMovie } = watchlistSclice.actions;

export default watchlistSclice.reducer;
