import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, setLoading, setMovies } from '../moviesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setLoading(true));
      const response = await fetch('https://www.omdbapi.com/?s=action&apikey=463131c9&page=1');
      const data = await response.json();
      dispatch(setMovies(data.Search));
      dispatch(setLoading(false));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <button onClick={() => dispatch(addFavorite(movie))}>Add to Favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

