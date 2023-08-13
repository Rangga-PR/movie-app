import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./api/movie";
import watchlistReducer from "./slice/watchlist";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    watchlist: watchlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
