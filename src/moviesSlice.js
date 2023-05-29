import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    loading: false,
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.some((movie) => movie.imdbID === action.payload.imdbID)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setLoading, setMovies } = movieSlice.actions;
export default movieSlice.reducer;
