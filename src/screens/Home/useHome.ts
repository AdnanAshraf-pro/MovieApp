import { useEffect, useState } from 'react';
import movieInstance from '../../network/movieInstance';
import { UPCOMING_MOVIES } from '../../network/endpoints';

function useHome() {
  const [moviesList, setmoviesList] = useState([]);
  const getMoviesList = () => {
    const data = movieInstance.get(UPCOMING_MOVIES);
    console.log('data', data);
    setmoviesList([]);
  };
  
  useEffect(() => {
    getMoviesList();
  }, []);

  return {
    getMoviesList,
    moviesList,
  };
}

export default useHome;
