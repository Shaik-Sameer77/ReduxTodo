import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import movieReducer from './moviesSlice';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
