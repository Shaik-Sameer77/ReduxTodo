import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../moviesSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div>
      <h1>Favorites Page</h1>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <button onClick={() => dispatch(removeFavorite(movie.imdbID))}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;

